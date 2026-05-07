# The Machine Room

*Note 013*

---

There is a tendency in modern infrastructure to treat the cloud as the real machine and the laptop as a thin client. You push work up, the result comes back, the local device is just a screen. This is practical. It is also a kind of forgetting.

The Mac on the desk has a CPU doing several trillion operations per second, a GPU worth more compute than entire data centres of ten years ago, memory that would have seemed absurd to spec in 2010, and an SSD fast enough that disk I/O is rarely the bottleneck. Most of it sits idle, waiting for a browser tab to need it.

Local computation has properties the cloud cannot replicate. Latency measured in microseconds, not milliseconds. No egress cost. No rate limit. No vendor outage. No data leaving the building. The feedback loop between input and result is tight enough that experimentation becomes cheap again.

Agents change the equation further. When an AI process can run a shell command, read a file, call a local API, and modify output in a loop, the machine room stops being a metaphor. The laptop becomes a server with a keyboard attached. The distinction between development environment and runtime collapses.

This is not an argument against the cloud. It is an argument for knowing which layer is doing what. The cloud is good at scale, redundancy, and coordination across machines. The local machine is good at iteration, privacy, and latency. Conflating the two means paying cloud prices for work the laptop could do in the background while you read something else.

The tools worth building are the ones that make local power legible. Scripts that start services cleanly and stop them cleanly. Interfaces that show what is running and what it costs. Agents that use the filesystem as memory instead of exporting state to a database two time zones away. The goal is not to avoid infrastructure — it is to own the layer you are actually in.

The browser is a good control surface. The Mac is the machine room. Those two sentences describe most of what I build. Everything else is coordination.
