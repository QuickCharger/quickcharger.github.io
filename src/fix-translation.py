#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Repair pass for the Libevent translation on quickcharger.github.io.

Fixes applied to BOTH the published pages (repo root + src/public copies) and the
translation source (src/translate-libevent.js):

  1. Mangled markup: raw `<event2/xxx.h>` inside translation strings was parsed as an
     HTML tag, producing `<event2 xxx.h="">` plus a stray `</event2>`. Re-escaped.
  2. Twelve translation entries existed in the source script but never reached the
     pages, because the English text sits in admonition blocks (`<td class="content">`)
     which the `p:contains()` selector could not match. Now inserted.
  3. Leftover translator notes / TODO markers removed.
  4. Typos, duplicated characters/punctuation and mistranslations corrected.
  5. R7: `\n` / `\r\n` escape sequences had been consumed by JS string escapes and were
     rendering as blank space. Restored as literal text.
  6. R9: the `<hr>`-separated ai_flags list was misplaced and used rules instead of
     line breaks. Moved to its paragraph and switched to `<br>`.

Run:  python src/fix-translation.py
"""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

HTML_TARGETS = [
    'Libevent_C0_About_this_document.html',
    'Libevent_C1_A_tiny_introduction_to_synchronous_non-blocking_IO.html',
    'Libevent_Catelog_Fast_portable_non-blocking_network_programming_with_Libevent.html',
    'Libevent_R0_The_Libevent_Reference_Manual_Preliminaries.html',
    'Libevent_R1_Setting_up_the_Libevent_library.html',
    'Libevent_R2_Creating_an_event_base.html',
    'Libevent_R3_Working_with_an_event_loop.html',
    'Libevent_R4_Working_with_events.html',
    'Libevent_R5_Helper_functions_and_types_for_Libevent.html',
    'Libevent_R6_Bufferevents_concepts_and_basics.html',
    'Libevent_R6a_Bufferevents_advanced_topics.html',
    'Libevent_R7_Evbuffers_utility_functionality_for_buffered_IO.html',
    'Libevent_R8_Connection_listeners_accepting_TCP_connections.html',
    'Libevent_R9_Using_DNS_with_Libevent_high_and_low-level_functionality.html',
    'Libevent_R10_Using_the_built-in_HTTP_server.html',
]

report = []


def note(msg):
    report.append(msg)
    print(msg)


# ---------------------------------------------------------------------------
# 1. re-escape mangled <event2/...> tags inside translation paragraphs
# ---------------------------------------------------------------------------
MANGLED = re.compile(r'<event2 ([A-Za-z_]+\.h)="">')
STRAY_CLOSE = re.compile(r'</event2>')


def repair_paragraph(m):
    inner = m.group(1)
    if '<event2' not in inner and '</event2>' not in inner:
        return m.group(0)
    inner = MANGLED.sub(r'&lt;event2/\1&gt;', inner)
    # cheerio emitted the stray closing tags at the tail of the paragraph
    inner = inner.replace('</event2>', '')
    return '<p class="translate">' + inner + '</p>'


def repair_mangled_tags(text):
    return re.sub(r'<p class="translate">(.*?)</p>', repair_paragraph, text, flags=re.S)


# ---------------------------------------------------------------------------
# 2. targeted text edits:  (file, old, new, expected occurrences)
# ---------------------------------------------------------------------------
N = '\n'
EOL_LIST_OLD = (
    'evbuffer_readln()函数理解4种行终止格式：'
    '<br>EVBUFFER_EOL_LF<br>  一行的结束是单个换行符。（这也被称为"'
    + N + '"。它的ASCII值是0x0A。）'
    '<br>EVBUFFER_EOL_CRLF_STRICT<br>  一行的结束是一个回车符，后跟一个换行符。（这也被称为"'
    + N + '"。ASCII值是0x0D 0x0A。）'
    '<br>EVBUFFER_EOL_CRLF<br>  行的结束是一个可选的回车符，后跟一个换行符。（换句话说，它可以是"'
    + N + '"或"' + N + '"）。这种格式在解析基于文本的互联网协议时非常有用，因为标准通常规定一个"'
    + N + '"作为行终结符，但不符合标准的客户端有时只使用"' + N + '"。'
    '<br>EVBUFFER_EOL_ANY<br>  行的结束是任意数量的回车符和换行符序列。这种格式不是很有用；它主要存在是为了向后兼容。'
    '<br>EVBUFFER_EOL_NUL<br>  行的结束是一个值为0的单字节 —— 也就是，一个ASCII NUL。'
    '<br>（请注意，如果你使用event_set_mem_functions()覆盖默认的malloc，那么由evbuffer_readln返回的字符串将由你指定的malloc替换函数分配。）'
)

EOL_LIST_NEW = (
    'evbuffer_readln()函数理解 4 种行终止格式：'
    '<br>EVBUFFER_EOL_LF<br>  行的结束是单个换行符（也就是 "\\n"，ASCII 值为 0x0A）。'
    '<br>EVBUFFER_EOL_CRLF_STRICT<br>  行的结束是一个回车符后跟一个换行符（也就是 "\\r\\n"，ASCII 值为 0x0D 0x0A）。'
    '<br>EVBUFFER_EOL_CRLF<br>  行的结束是一个可选的回车符后跟一个换行符（换句话说，它可以是 "\\r\\n"，也可以是 "\\n"）。'
    '这种格式在解析基于文本的互联网协议时很有用，因为标准通常规定以 "\\r\\n" 作为行终止符，但不符合标准的客户端有时只使用 "\\n"。'
    '<br>EVBUFFER_EOL_ANY<br>  行的结束是任意数量的回车符和换行符组成的序列。这种格式不太有用，它主要是为了向后兼容而存在。'
    '<br>EVBUFFER_EOL_NUL<br>  行的结束是一个值为 0 的单字节 —— 也就是 ASCII NUL。'
    '<br>（请注意：如果你用 event_set_mem_functions() 覆盖了默认的 malloc，那么 evbuffer_readln 返回的字符串将由你指定的 malloc 替换函数来分配。）'
)

AI_FLAGS_OLD = (
    '<hr>EVUTIL_AI_PASSIVE<hr>  这个标志表明我们将使用地址进行监听，而不是用于连接。'
    '通常这没有什么区别，除非 nodename 为NULL：对于连接，空的 nodename 是 localhost（127.0.0.1 或 ::1），'
    '而监听时，空的 nodename 是 ANY（0.0.0.0 或 ::0）。'
    '<hr>EVUTIL_AI_CANONNAME<hr>  如果设置了这个标志，我们会尝试在 ai_canonname 字段中报告主机的规范名称。'
    '<hr>EVUTIL_AI_NUMERICHOST<hr>  设置这个标志时，我们只解析数字的 IPv4 和 IPv6 地址；'
    '如果 nodename 需要名称查找，我们会返回 EVUTIL_EAI_NONAME 错误。'
    '<hr>EVUTIL_AI_NUMERICSERV<hr>  设置这个标志时，我们只解析数字服务名称。'
    '如果 servname 既不是 NULL 也不是十进制整数，返回 EVUTIL_EAI_NONAME 错误。'
    '<hr>EVUTIL_AI_V4MAPPED<hr>  这个标志表示，如果 ai_family 是 AF_INET6 并且没有找到 IPv6 地址，'
    '结果中的任何 IPv4 地址应该作为 v4 映射的 IPv6 地址返回。除非操作系统支持，否则 evutil_getaddrinfo() 当前不支持它。'
    '<hr>EVUTIL_AI_ALL<hr>  如果同时设置了这个标志和 EVUTIL_AI_V4MAPPED，'
    '那么结果中的 IPv4 地址会作为 v4 映射的 IPv6 地址包含在结果中，不管是否有 IPv6 地址。'
    '除非操作系统支持，否则 evutil_getaddrinfo() 当前不支持它。'
    '<hr>EVUTIL_AI_ADDRCONFIG<hr>  如果设置了这个标志，那么只有当系统具有非本地 IPv4 地址时，'
    '结果中才包括 IPv4 地址，并且只有当系统具有非本地 IPv6 地址时，结果中才包括 IPv6 地址。'
    '<p></p>'
)

AI_FLAGS_NEW = (
    'hints 中的 ai_flags 字段告诉 evutil_getaddrinfo() 如何执行查找。'
    '它可以包含下面列出的零个或多个标志，用 OR 组合在一起。'
    '<br>EVUTIL_AI_PASSIVE<br>  这个标志表明我们将把这些地址用于监听，而不是用于连接。'
    '通常这没有什么区别，除非 nodename 为 NULL：用于连接时，空的 nodename 表示 localhost（127.0.0.1 或 ::1）；'
    '而用于监听时，空的 nodename 表示 ANY（0.0.0.0 或 ::0）。'
    '<br>EVUTIL_AI_CANONNAME<br>  如果设置了这个标志，我们会尽量在 ai_canonname 字段中报告主机的规范名称。'
    '<br>EVUTIL_AI_NUMERICHOST<br>  设置这个标志时，我们只解析数字形式的 IPv4 和 IPv6 地址；'
    '如果 nodename 需要名称查找，我们会返回 EVUTIL_EAI_NONAME 错误。'
    '<br>EVUTIL_AI_NUMERICSERV<br>  设置这个标志时，我们只解析数字形式的服务名称。'
    '如果 servname 既不是 NULL 也不是十进制整数，就返回 EVUTIL_EAI_NONAME 错误。'
    '<br>EVUTIL_AI_V4MAPPED<br>  这个标志表示：如果 ai_family 是 AF_INET6 且没有找到 IPv6 地址，'
    '结果中的 IPv4 地址应该以 v4 映射的 IPv6 地址形式返回。除非操作系统支持，否则 evutil_getaddrinfo() 目前不支持它。'
    '<br>EVUTIL_AI_ALL<br>  如果同时设置了这个标志和 EVUTIL_AI_V4MAPPED，'
    '那么不管有没有 IPv6 地址，结果中的 IPv4 地址都会以 v4 映射的 IPv6 地址形式包含在结果中。'
    '除非操作系统支持，否则 evutil_getaddrinfo() 目前不支持它。'
    '<br>EVUTIL_AI_ADDRCONFIG<br>  如果设置了这个标志，那么只有当系统具有非本地 IPv4 地址时，'
    '结果中才包含 IPv4 地址；只有当系统具有非本地 IPv6 地址时，结果中才包含 IPv6 地址。'
)

TEXT_EDITS = [
    # ---------------- R1 ----------------
    ('Libevent_R1_Setting_up_the_Libevent_library.html',
     '这些函数在`&lt;event2/event.h&gt;中声明，最早出现在Libevent 2.0.3-alpha中。',
     '这些函数在 `&lt;event2/event.h&gt;` 中声明，最早出现在 Libevent 2.0.3-alpha 中。', 1),
    ('Libevent_R1_Setting_up_the_Libevent_library.html',
     'event_set_mem_functions()函数在&lt;event2/event.h&gt;中声明,最初出现在Libevent 2.0.1-alpha中。',
     'event_set_mem_functions() 函数在 &lt;event2/event.h&gt; 中声明，最初出现在 Libevent 2.0.1-alpha 中。', 1),
    ('Libevent_R1_Setting_up_the_Libevent_library.html',
     'be safe, call it just after you set your threading functions.</td>',
     'be safe, call it just after you set your threading functions.'
     '<p class="translate">这个函数必须在创建或使用任何锁之前调用。为了安全起见，请在你设置好线程函数之后立即调用它。</p></td>', 1),

    # ---------------- R2 ----------------
    ('Libevent_R2_Creating_an_event_base.html',
     'events across multiple threads.]</td>',
     'events across multiple threads.]'
     '<p class="translate">【未来版本的 Libevent 可能会支持在多个线程中运行 event_base。】</p></td>', 1),
    ('Libevent_R2_Creating_an_event_base.html',
     'Libevent can’t satisfy, event_base_new_with_config() will return NULL.</td>',
     'Libevent can’t satisfy, event_base_new_with_config() will return NULL.'
     '<p class="translate">很容易设置出一个你的操作系统并不支持的 event_config。'
     '例如，截至 Libevent 2.0.1-alpha 版本，Windows 上没有 O(1) 后端，'
     'Linux 上也没有同时提供 EV_FEATURE_FDS 和 EV_FEATURE_O1 的后端。'
     '如果你制定的配置 Libevent 无法满足，event_base_new_with_config() 将返回 NULL。</p></td>', 1),
    ('Libevent_R2_Creating_an_event_base.html',
     'version of OSX where kqueue is too buggy to use.</td>',
     'version of OSX where kqueue is too buggy to use.'
     '<p class="translate">这个函数返回的是 Libevent 编译时支持的方法列表。'
     '你的操作系统实际上可能并不完全支持这些方法。'
     '例如，你用的可能是 OSX 的某个版本，在那上面 kqueue 的 bug 太多，无法使用。</p></td>', 1),
    ('Libevent_R2_Creating_an_event_base.html',
     'best to call it immediately after creating the event_base.</td>',
     'best to call it immediately after creating the event_base.'
     '<p class="translate">你必须在任何 event 变为活动状态之前调用这个函数。'
     '最好是在创建 event_base 之后立即调用。</p></td>', 1),
    ('Libevent_R2_Creating_an_event_base.html',
     '返回值base中配置的优先级。',
     '返回值等于 base 中配置的优先级数量。', 1),
    ('Libevent_R2_Creating_an_event_base.html',
     '并非所有event在调用fork()后都能干净地持续运行',
     '并非所有事件后端在调用 fork() 后都能干净地持续运行', 1),
    ('Libevent_R2_Creating_an_event_base.html',
     '并将当base设置为分配的base',
     '并将当前 base 设置为新分配的 base', 1),
    ('Libevent_R2_Creating_an_event_base.html',
     'EVENT_BASE_FLAG_NO_CACHE_TIME<br>  不是每次执行超时回调时都检查当前时间，而是在每个超时回调之后检查。'
     '这可能会使用比你本意更多的 CPU，所以要注意！(PS:字面意思是不使用cachetime，但解释和cache没有关系，不明白)<br>',
     'EVENT_BASE_FLAG_NO_CACHE_TIME<br>  不是在每次要运行超时回调时都检查当前时间，而是在每个超时回调之后检查。'
     '这可能会比你本意消耗更多的 CPU，所以要注意！<br>', 1),
    ('Libevent_R2_Creating_an_event_base.html',
     'EVENT_BASE_FLAG_EPOLL_USE_CHANGELIST<br>  告诉 Libevent，如果它决定使用 epoll，使用基于changelist是更快并且安全的。'
     '<br>epoll-changelist可以避免不必要的系统调用'
     '（原文翻译：epoll-changelist后端可以避免在对后端的调度函数的调用之间多次修改同一个 fd 的状态的情况下，避免不必要的系统调用），'
     '但它可能触发一个内核错误，如果你给 Libevent 通过dup()克隆的fd 或 其他变体，可能会导致错误的结果。<br>',
     'EVENT_BASE_FLAG_EPOLL_USE_CHANGELIST<br>  告诉 Libevent：如果它决定使用 epoll 后端，'
     '那么使用更快的、基于 "changelist" 的后端是安全的。'
     '<br>在同一个 fd 的状态在后端调度函数的前后两次调用之间被多次修改的情况下，'
     'epoll-changelist 后端可以避免不必要的系统调用；但如果你把通过 dup() 克隆的 fd 或其他变体交给 Libevent，'
     '它也可能触发一个内核 bug，导致错误的结果。<br>', 1),
    ('Libevent_R2_Creating_an_event_base.html',
     'EVENT_BASE_FLAG_PRECISE_TIMER<br>默认情况下，Libevent 会尝试使用操作系统提供的最快的定时机制。',
     'EVENT_BASE_FLAG_PRECISE_TIMER<br>  默认情况下，Libevent 会尝试使用操作系统提供的最快的定时机制。', 1),

    # ---------------- R3 ----------------
    ('Libevent_R3_Working_with_an_event_loop.html',
     'than the one executing the event loop.</td>',
     'than the one executing the event loop.'
     '<p class="translate">由于 event_base 在 Libevent 2.0 之前不支持锁，'
     '这些函数并不是完全线程安全的：不允许从运行事件循环的那个线程之外的线程调用 _loopbreak() 或 _loopexit() 函数。</p></td>', 1),
    ('Libevent_R3_Working_with_an_event_loop.html',
     '当没有event正在运行时，event_base_loopexit(base,NULL)和event_base_loopbreak(base)的行为不同',
     '当没有事件循环正在运行时，event_base_loopexit(base, NULL) 和 event_base_loopbreak(base) 的行为不同', 1),
    ('Libevent_R3_Working_with_an_event_loop.html',
     '与event_base()相关联的每个当前激活或待处理的event',
     '与 event_base 相关联的每个当前激活或待处理的 event', 1),
    ('Libevent_R3_Working_with_an_event_loop.html',
     '将被event_base_foreach_function()返回', '将被 event_base_foreach_event() 返回', 1),
    ('Libevent_R3_Working_with_an_event_loop.html',
     '或event_base_break()。', '或 event_base_loopbreak()。', 1),
    ('Libevent_R3_Working_with_an_event_loop.html',
     '或event_base_break()而停止的', '或 event_base_loopbreak() 而停止的', 1),
    ('Libevent_R3_Working_with_an_event_loop.html',
     '不接受基础参数', '不接受 base 参数', 1),

    # ---------------- R4 ----------------
    ('Libevent_R4_Working_with_events.html',
     'timeout will wait 40 years, not 10 seconds.</td>',
     'timeout will wait 40 years, not 10 seconds.'
     '<p class="translate">不要将 tv 设置为希望超时触发的那个时间点。'
     '如果你在 2010 年 1 月 1 日写 "tv→tv_sec = time(NULL)+10;"，你的超时将等待 40 年，而不是 10 秒。</p></td>', 1),
    ('Libevent_R4_Working_with_events.html',
     'its callback has a chance to execute, the callback will not be' + N + 'executed.</td>',
     'its callback has a chance to execute, the callback will not be' + N + 'executed.'
     '<p class="translate">如果你在一个 event 变为 active 之后、在其回调有机会执行之前将它删除，'
     '那么这个回调将不会被执行。</p></td>', 1),
    ('Libevent_R4_Working_with_events.html',
     '它将离开pending，并根据提供的超时重新pending',
     '它会保持 pending 状态，并按提供的超时重新调度', 1),
    ('Libevent_R4_Working_with_events.html',
     '如果evnet没有设置超时', '如果 event 没有设置超时', 1),
    ('Libevent_R4_Working_with_events.html',
     '之前，，你可以设置它的优先级', '之前，你可以设置它的优先级', 1),
    ('Libevent_R4_Working_with_events.html',
     '更早的的 Libevent', '更早的 Libevent', 1),
    ('Libevent_R4_Working_with_events.html',
     '但使用当base', '但使用当前 base', 1),
    ('Libevent_R4_Working_with_events.html',
     '区分已初始化的event（例如，通过使用 calloc() 分配它或使用 memset() 或 bzero() 清除它）',
     '区分已初始化的 event 和已被清零的内存（例如，通过 calloc() 分配它，或用 memset() 或 bzero() 清除它）', 1),
    ('Libevent_R4_Working_with_events.html',
     '默认值是base中队列数量除以 2。', '默认值是 event base 中队列数量除以 2。', 1),

    # ---------------- R6 ----------------
    ('Libevent_R6_Bufferevents_concepts_and_basics.html',
     'evutil_make_socket_nonblocking for this.]</td>',
     'evutil_make_socket_nonblocking for this.]'
     '<p class="translate">【请确保你提供给 bufferevent_socket_new 的 socket 处于非阻塞模式。'
     'Libevent 为此提供了便捷方法 evutil_make_socket_nonblocking。】</p></td>', 1),
    ('Libevent_R6_Bufferevents_concepts_and_basics.html',
     '读写“水位标记”（水位标记）', '读写“水位标记”', 1),
    ('Libevent_R6_Bufferevents_concepts_and_basics.html',
     '在连接完成之前向输出buffer添加数据是可以的 ！！！',
     '（在连接完成之前就向输出缓冲区添加数据是可以的。）', 1),
    ('Libevent_R6_Bufferevents_concepts_and_basics.html',
     '调用用户提供的回调时，bufferevent都会被上锁。',
     'bufferevent 在调用用户提供的回调期间都会持有锁。', 1),

    # ---------------- R6a ----------------
    ('Libevent_R6a_Bufferevents_advanced_topics.html',
     '/// todo：写一个关于速率限制的示例', '编写一个速率限制的示例', 1),
    ('Libevent_R6a_Bufferevents_advanced_topics.html',
     '/// TODO：一旦bufferevent_shutdown() API完成后删除此项。',
     '一旦 bufferevent_shutdown() API 完成，请删除此项。', 1),

    # ---------------- R7 ----------------
    ('Libevent_R7_Evbuffers_utility_functionality_for_buffered_IO.html',
     '它只只搜索到end位置', '它只搜索到 end 位置为止', 1),
    ('Libevent_R7_Evbuffers_utility_functionality_for_buffered_IO.html',
     '这可能会有所帮助,如果你有多个evbuffers，其回调可能导致数据互相被添加和删除，而你希望避免堆栈被破坏时。',
     '如果你有多个 evbuffer，它们的回调可能导致数据在彼此之间被添加和删除，'
     '而你希望避免破坏栈时，这可能会有所帮助。', 1),
    ('Libevent_R7_Evbuffers_utility_functionality_for_buffered_IO.html',
     EOL_LIST_OLD, EOL_LIST_NEW, 1),

    # ---------------- R8 ----------------
    ('Libevent_R8_Connection_listeners_accepting_TCP_connections.html',
     'blocking mode, undefined behavior might occur.]</td>',
     'blocking mode, undefined behavior might occur.]'
     '<p class="translate">【使用 evconnlistener_new 时，请确保你的监听 socket 处于非阻塞模式：'
     '可以用 evutil_make_socket_nonblocking，也可以自己手动设置正确的 socket 选项。'
     '监听 socket 如果一直处于阻塞模式，可能会出现未定义的行为。】</p></td>', 1),
    ('Libevent_R8_Connection_listeners_accepting_TCP_connections.html',
     'pending状态的的socket', 'pending 状态的 socket', 1),

    # ---------------- R9 ----------------
    ('Libevent_R9_Using_DNS_with_Libevent_high_and_low-level_functionality.html',
     'Libevent 提供了一些用于解析 DNS 名称的 API，以及用于实现简单 DNS 服务器的实现。 设施 -&gt; 实现',
     'Libevent 提供了一些用于解析 DNS 名称的 API，以及一个用于实现简单 DNS 服务器的机制。', 1),
    ('Libevent_R9_Using_DNS_with_Libevent_high_and_low-level_functionality.html',
     '并带有一个 canceled 的错误代码。', '并带有一个“已取消”的错误码。', 1),
    ('Libevent_R9_Using_DNS_with_Libevent_high_and_low-level_functionality.html',
     'flags参数是0或DNS_QUERY_NO_SEARCH，用于否定搜索列表如果原始搜索失败。',
     'flags 参数是 0 或 DNS_QUERY_NO_SEARCH；后者用于在原始搜索失败时禁用搜索列表。', 1),
    ('Libevent_R9_Using_DNS_with_Libevent_high_and_low-level_functionality.html',
     'in Libevent 2.0.1-alpha.</p><p class="translate">这些函数成功时返回0，失败时返回-1。</p>',
     'in Libevent 2.0.1-alpha.</p>'
     '<p class="translate">这些函数成功时返回 0，失败时返回 -1。它们在 Libevent 2.0.1-alpha 中引入。</p>', 1),
    ('Libevent_R9_Using_DNS_with_Libevent_high_and_low-level_functionality.html',
     AI_FLAGS_OLD, '<p></p>', 1),
    ('Libevent_R9_Using_DNS_with_Libevent_high_and_low-level_functionality.html',
     'ORed together.</p></div>',
     'ORed together.</p><p class="translate">' + AI_FLAGS_NEW + '</p></div>', 1),

    # ---------------- R10 ----------------
    ('Libevent_R10_Using_the_built-in_HTTP_server.html',
     '这里的代码基础应该相对容易理解', '这里的代码应该相对容易理解', 1),
]


def write_preserving_eol(path, text):
    """Write text back using the line-ending style the file already had on disk.

    Some pages (the ones cheerio rewrote) are LF; the ones the translation never
    touched are still CRLF. Rewriting everything as LF would create whole-file diffs.
    """
    with io.open(path, 'rb') as fh:
        raw = fh.read()
    crlf = raw.count(b'\r\n')
    lf_only = raw.count(b'\n') - crlf
    if crlf > lf_only:
        text = text.replace('\r\n', '\n').replace('\n', '\r\n')
    with io.open(path, 'w', encoding='utf-8', newline='') as fh:
        fh.write(text)


def apply_edits():
    errors = []
    files = {}
    for name in HTML_TARGETS:
        for path in (name, os.path.join('src', 'public', name)):
            if os.path.exists(path):
                with io.open(path, 'r', encoding='utf-8', newline='') as fh:
                    files[path] = fh.read().replace('\r\n', '\n')

    # 1) unmangle markup
    for path in list(files):
        before = files[path]
        files[path] = repair_mangled_tags(before)
        if files[path] != before:
            note(f'[unmangle]   {path}')

    # 2) targeted text edits
    for name, old, new, count in TEXT_EDITS:
        for path in (name, os.path.join('src', 'public', name)):
            if path not in files:
                continue
            found = files[path].count(old)
            if found == 0 and new in files[path] and count == 1:
                continue          # already applied on an earlier run
            if found != count:
                errors.append(f'{path}: expected {count} occurrence(s), found {found} :: {old[:70]!r}')
                continue
            files[path] = files[path].replace(old, new)

    # 3) leftovers of the mangling must be gone
    for path, text in files.items():
        if MANGLED.search(text) or STRAY_CLOSE.search(text):
            errors.append(f'{path}: still contains mangled <event2> markup')

    if errors:
        print('\n*** ABORTED — no files written ***')
        for e in errors:
            print('  !', e)
        return False

    for path, text in files.items():
        write_preserving_eol(path, text)
    note(f'wrote {len(files)} HTML files')
    return True


# ---------------------------------------------------------------------------
# 3. keep the translation source in sync
# ---------------------------------------------------------------------------
JS_EDITS = [
    ("'Tip 【未来版本的 Libevent 可能会支持在多线程中运行 event_bases。】'",
     "'【未来版本的 Libevent 可能会支持在多个线程中运行 event_base。】'", 1),
    ("'这个函数必须在创建或调用锁前调用。为了安全起见，在你设置线程函数之后马上调用它。'",
     "'这个函数必须在创建或使用任何锁之前调用。为了安全起见，请在你设置好线程函数之后立即调用它。'", 1),
    ("'很容易设置一个你的操作系统不支持的event_config。例如，截至 Libevent 2.0.1-alpha 版本，Windows 上没有 O(1) 后端，"
     "并且 Linux 上没有同时提供 EV_FEATURE_FDS 和 EV_FEATURE_O1 的后端。如果你制定了一个 Libevent 无法满足的配置，"
     "event_base_new_with_config() 将返回 NULL。'",
     "'很容易设置出一个你的操作系统并不支持的 event_config。例如，截至 Libevent 2.0.1-alpha 版本，Windows 上没有 O(1) 后端，"
     "Linux 上也没有同时提供 EV_FEATURE_FDS 和 EV_FEATURE_O1 的后端。如果你制定的配置 Libevent 无法满足，"
     "event_base_new_with_config() 将返回 NULL。'", 1),
    ("'这个函数返回的是Libevent编译时支持的方法列表。实际上你的操作系统可能并不完全支持这些方法。例如，"
     "你可能使用的是OSX的一个版本，在这个版本上kqueue太多bug，不能使用。'",
     "'这个函数返回的是 Libevent 编译时支持的方法列表。你的操作系统实际上可能并不完全支持这些方法。例如，"
     "你用的可能是 OSX 的某个版本，在那上面 kqueue 的 bug 太多，无法使用。'", 1),
    ("'你必须在任何event变为活动状态之前调用这个函数。最好是在创建event_base后立即调用。'",
     "'你必须在任何 event 变为活动状态之前调用这个函数。最好是在创建 event_base 之后立即调用。'", 1),
    ("'返回值base中配置的优先级。", "'返回值等于 base 中配置的优先级数量。", 1),
    ("'并非所有event在调用fork()后都能干净地持续运行。",
     "'并非所有事件后端在调用 fork() 后都能干净地持续运行。", 1),
    ("并将当base设置为分配的base。", "并将当前 base 设置为新分配的 base。", 1),
    ("所以要注意！(PS:字面意思是不使用cachetime，但解释和cache没有关系，不明白)<br>",
     "所以要注意！<br>", 1),
    ("  不是每次执行超时回调时都检查当前时间，而是在每个超时回调之后检查。这可能会使用比你本意更多的 CPU，",
     "  不是在每次要运行超时回调时都检查当前时间，而是在每个超时回调之后检查。这可能会比你本意消耗更多的 CPU，", 1),
    ("EVENT_BASE_FLAG_EPOLL_USE_CHANGELIST<br>  告诉 Libevent，如果它决定使用 epoll，使用基于changelist是更快并且安全的。"
     "<br>epoll-changelist可以避免不必要的系统调用（原文翻译：epoll-changelist后端可以避免在对后端的调度函数的调用之间"
     "多次修改同一个 fd 的状态的情况下，避免不必要的系统调用），但它可能触发一个内核错误，如果你给 Libevent 通过dup()克隆的fd "
     "或 其他变体，可能会导致错误的结果。<br>",
     'EVENT_BASE_FLAG_EPOLL_USE_CHANGELIST<br>  告诉 Libevent：如果它决定使用 epoll 后端，那么使用更快的、'
     '基于 "changelist" 的后端是安全的。<br>在同一个 fd 的状态在后端调度函数的前后两次调用之间被多次修改的情况下，'
     'epoll-changelist 后端可以避免不必要的系统调用；但如果你把通过 dup() 克隆的 fd 或其他变体交给 Libevent，'
     '它也可能触发一个内核 bug，导致错误的结果。<br>', 1),
    ("EVENT_BASE_FLAG_PRECISE_TIMER<br>默认情况下", "EVENT_BASE_FLAG_PRECISE_TIMER<br>  默认情况下", 1),
    ("'由于event_base在Libevent 2.0之前不支持锁，这些函数不是线程安全的：不允许从执行event线程之外的线程中调用"
     "_loopbreak()或_loopexit()函数。'",
     "'由于 event_base 在 Libevent 2.0 之前不支持锁，这些函数并不是完全线程安全的：不允许从运行事件循环的那个线程之外的线程"
     "调用 _loopbreak() 或 _loopexit() 函数。'", 1),
    ("当没有event正在运行时，event_base_loopexit(base,NULL)和event_base_loopbreak(base)的行为不同",
     "当没有事件循环正在运行时，event_base_loopexit(base, NULL) 和 event_base_loopbreak(base) 的行为不同", 1),
    ("与event_base()相关联的每个当前激活或待处理的event",
     "与 event_base 相关联的每个当前激活或待处理的 event", 1),
    ("将被event_base_foreach_function()返回", "将被 event_base_foreach_event() 返回", 1),
    ("或event_base_break()。", "或 event_base_loopbreak()。", 1),
    ("或event_base_break()而停止的", "或 event_base_loopbreak() 而停止的", 1),
    ("除了它们不接受基础参数。", "除了它们不接受 base 参数。", 1),
    ("'不要将 tv 设置为时间戳。", "'不要将 tv 设置为希望超时触发的那个时间点。", 1),
    ("'如果event变为active但在其回调执行之前删除它，那么回调将不会被执行。'",
     "'如果你在一个 event 变为 active 之后、在其回调有机会执行之前将它删除，那么这个回调将不会被执行。'", 1),
    ("它将离开pending，并根据提供的超时重新pending", "它会保持 pending 状态，并按提供的超时重新调度", 1),
    ("[确保提供给bufferevent_socket_new的socket处于非阻塞模式。Libevent提供了便捷方法evutil_make_socket_nonblocking来实现这一点。]",
     "【请确保你提供给 bufferevent_socket_new 的 socket 处于非阻塞模式。"
     "Libevent 为此提供了便捷方法 evutil_make_socket_nonblocking。】", 1),
    # R4 typos / wording
    ("如果evnet没有设置超时", "如果 event 没有设置超时", 1),
    ("添加到 `event_base` 之前，，", "添加到 `event_base` 之前，", 1),
    ("更早的的 Libevent", "更早的 Libevent", 1),
    ("'还有一个 event_once() 函数，起到了 event_base_once() 的作用，但使用当base。'",
     "'还有一个 event_once() 函数，起到了 event_base_once() 的作用，但使用的是当前 base。'", 1),
    ("你可以使用这些函数来区分已初始化的event（例如，通过使用 calloc() 分配它或使用 memset() 或 bzero() 清除它）。",
     "你可以使用这些函数来区分已初始化的 event 和已被清零的内存"
     "（例如，通过 calloc() 分配它，或用 memset() 或 bzero() 清除它）。", 1),
    ("默认值是base中队列数量除以 2。", "默认值是 event base 中队列数量除以 2。", 1),
    ("你可以通过调整bufferevent的读写“水位标记”（水位标记）来改变这些函数的行为。",
     "你可以通过调整 bufferevent 的读写“水位标记”来改变这些函数的行为。", 1),
    ("'在连接完成之前向输出buffer添加数据是可以的 ！！！'",
     "'（在连接完成之前就向输出缓冲区添加数据是可以的。）'", 1),
    ("调用用户提供的回调时，bufferevent都会被上锁。",
     "bufferevent 在调用用户提供的回调期间都会持有锁。", 1),
    ("'这个功能在Libevent 2.0.2-alpha中引入。'", "'这个函数在 Libevent 2.0.2-alpha 中引入。'", 1),
    ("'/// todo：写一个关于速率限制的示例'", "'编写一个速率限制的示例'", 1),
    ("'/// TODO：一旦bufferevent_shutdown() API完成后删除此项。'",
     "'一旦 bufferevent_shutdown() API 完成，请删除此项。'", 1),
    ("它只只搜索到end位置", "它只搜索到 end 位置为止", 1),
    ("这可能会有所帮助,如果你有多个evbuffers，其回调可能导致数据互相被添加和删除，而你希望避免堆栈被破坏时。",
     "如果你有多个 evbuffer，它们的回调可能导致数据在彼此之间被添加和删除，"
     "而你希望避免破坏栈时，这可能会有所帮助。", 1),
    ("'Libevent 提供了一些用于解析 DNS 名称的 API，以及用于实现简单 DNS 服务器的实现。 设施 -> 实现'",
     "'Libevent 提供了一些用于解析 DNS 名称的 API，以及一个用于实现简单 DNS 服务器的机制。'", 1),
    ("并带有一个 canceled 的错误代码。", "并带有一个“已取消”的错误码。", 1),
    ("'flags参数是0或DNS_QUERY_NO_SEARCH，用于否定搜索列表如果原始搜索失败。",
     "'flags 参数是 0 或 DNS_QUERY_NO_SEARCH；后者用于在原始搜索失败时禁用搜索列表。", 1),
    ("'这些函数成功时返回0，失败时返回-1。它们在Libevent 2.0.1-alpha中引入。'",
     "'这些函数成功时返回 0，失败时返回 -1。它们在 Libevent 2.0.1-alpha 中引入。'", 1),
    ("基于前面的例子，这里的代码基础应该相对容易理解。", "基于前面的例子，这里的代码应该相对容易理解。", 1),
    ("pending状态的的socket", "pending 状态的 socket", 1),
    # ---- drifts between the source script and the published pages ----
    ("这些函数在`&lt;event2/event.h&gt;中声明，最早出现在Libevent 2.0.3-alpha中。",
     "这些函数在 `&lt;event2/event.h&gt;` 中声明，最早出现在 Libevent 2.0.3-alpha 中。", 1),
    ("event_set_mem_functions()函数在&lt;event2/event.h&gt;中声明,最初出现在Libevent 2.0.1-alpha中。",
     "event_set_mem_functions() 函数在 &lt;event2/event.h&gt; 中声明，最初出现在 Libevent 2.0.1-alpha 中。", 1),
    ('如果你在 2010 年 1 月 1 日设置 "tv→tv_sec = time(NULL)+10;"，你的超时将等待 40 年，而不是 10 秒。',
     '如果你在 2010 年 1 月 1 日写 "tv→tv_sec = time(NULL)+10;"，你的超时将等待 40 年，而不是 10 秒。', 1),
    ("【当使用`evconnlistener_new`时，确保你的监听socket处于非阻塞模式，可以通过使用`evutil_make_socket_nonblocking`"
     "或手动设置正确的socket选项来实现。当监听socket保留在阻塞模式下，可能会发生未定义的行为。】",
     "【使用 evconnlistener_new 时，请确保你的监听 socket 处于非阻塞模式：可以用 evutil_make_socket_nonblocking，"
     "也可以自己手动设置正确的 socket 选项。监听 socket 如果一直处于阻塞模式，可能会出现未定义的行为。】", 1),
]

# whole-block rewrites in the source
JS_BLOCK_EDITS = [
    ('evbuffer_readln()函数理解4种行终止格式：', 'evbuffer_readln()函数理解4种行终止格式：'),
]


def apply_js_edits():
    path = os.path.join('src', 'translate-libevent.js')
    with io.open(path, 'r', encoding='utf-8', newline='') as fh:
        text = fh.read().replace('\r\n', '\n')
    original = text
    errors = []

    # escape raw <event2/xxx.h> so a regeneration cannot mangle the markup again
    text, n = re.subn(r'<event2/([A-Za-z_]+\.h)>', r'&lt;event2/\1&gt;', text)
    if n:
        note(f'[js] escaped {n} raw <event2/...> header references')

    # literal \n and \r\n in the EVBUFFER_EOL description (JS was eating the escapes)
    text, n1 = re.subn(r'（这也被称为"\\n"', r'（这也被称为"\\\\n"', text)
    text, n2 = re.subn(r'（这也被称为"\\r\\n"', r'（这也被称为"\\\\r\\\\n"', text)
    text, n3 = re.subn(r'它可以是"\\r\\n"或"\\n"', r'它可以是"\\\\r\\\\n"或"\\\\n"', text)
    text, n4 = re.subn(r'规定一个"\\r\\n"作为行终结符，但不符合标准的客户端有时只使用"\\n"',
                       r'规定一个"\\\\r\\\\n"作为行终结符，但不符合标准的客户端有时只使用"\\\\n"', text)
    note(f'[js] restored literal escapes: {n1}/{n2}/{n3}/{n4}')

    # the ai_flags list used <hr> separators and sat in the wrong place; resync it
    text, n5 = re.subn(r'hints 中的 ai_flags 字段告诉.*?结果中才包括 IPv6 地址。',
                       AI_FLAGS_NEW, text, flags=re.S)
    if n5 == 0 and AI_FLAGS_NEW[:30] in text:
        note('[js] ai_flags list already resynced')
    elif n5 != 1:
        errors.append(f'JS: ai_flags block matched {n5} time(s), expected 1')
    else:
        note('[js] resynced the ai_flags list (hr -> br)')

    for old, new, count in JS_EDITS:
        found = text.count(old)
        if found == 0 and new in text:
            continue          # already applied on an earlier run
        if found != count:
            errors.append(f'JS: expected {count}, found {found} :: {old[:70]!r}')
            continue
        text = text.replace(old, new)

    if errors:
        print('\n*** JS ABORTED ***')
        for e in errors:
            print('  !', e)
        return False
    if text == original:
        print('[js] no change')
    write_preserving_eol(path, text)
    note('[js] saved src/translate-libevent.js')
    return True


if __name__ == '__main__':
    ok_html = apply_edits()
    ok_js = apply_js_edits()
    print('\nHTML ok:', ok_html, '| JS ok:', ok_js)
    sys.exit(0 if (ok_html and ok_js) else 1)
