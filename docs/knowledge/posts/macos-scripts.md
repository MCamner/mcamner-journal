# macos-scripts

*Note 007*

---

Most automation lives in a drawer. A shell script named something approximate, last modified two years ago, doing something no one remembers. It works, if you know where it lives and what arguments it expects and what state the machine needs to be in first.

macos-scripts is a different proposition. It is a modular CLI — a structured surface for terminal workflows, system tools, and repeatable operations on macOS. Each tool has a defined interface. Each operation has a name. You don't hunt for the script. You invoke the command.

The distinction matters because most automation fails at the edge of the person who wrote it. The tool works but only in the right directory, with the right context, remembered from a situation that no longer exists. A command surface removes that dependency. The invocation is the documentation.

The modularity is the point. Not one script that does many things but many scripts that each do one thing. The difference is not elegance — it is maintainability. A script with one responsibility can be tested, replaced, or removed without touching anything else. The system survives the change.

This is the same principle that makes good infrastructure: isolation, clear interfaces, minimal coupling. Applied to the tool layer instead of the architecture layer. The operating system is an interface. A modular CLI is how you use it without losing your mind.

The best automation is the kind you forget you built because it keeps working the same way every time. That consistency is not magic. It is structure.
