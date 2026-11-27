const foundations = [
  {
    objective: 'Trace a change from commit to release and choose a rollback trigger.',
    notes: [
      'DevOps combines development and operations practices so teams can deliver small changes safely. A commit records the proposed change. A build turns the source into a versioned artifact, such as a container image. Tests check the artifact before deployment puts that version into an environment.',
      'After deployment, compare health with the baseline. A health endpoint can show that a process responds, while a request error rate shows whether callers are failing. For a fictional care rota app, a successful build followed by a sharp increase in errors is a reason to pause the release.',
      'A rollback restores a previous known-good version. It can fail if the new release made an incompatible database change. Check compatibility and verify health after recovery.'
    ],
    flow: ['Commit source', 'Build artifact', 'Test artifact', 'Deploy version', 'Observe health'],
    lab: 'Simulate promoting one artifact and rolling back after a failed health check. Run in a disposable Bash directory.',
    commands: "mkdir -p release-lab && cd release-lab\nprintf 'v1\\n' > previous.txt\nprintf 'v2\\n' > candidate.txt\ncp candidate.txt live.txt\nprintf '503\\n' > health.txt\nif [ \"$(cat health.txt)\" = 503 ]; then cp previous.txt live.txt; fi\ncat live.txt",
    expected: 'v1',
    troubleshooting: 'If the result is v2, inspect health.txt and confirm it contains exactly 503.',
    recall: 'Why can a release pass its build and still need rolling back?',
    questions: [
      ['What should move through test and production?', 'The same versioned artifact', 'An untracked local build', 'The latest source regardless of commit'],
      ['The new rota release increases request errors. What should you check before rollback?', 'Whether the previous version can read the current database schema', 'Whether the commit title contains rollback', 'Whether the source has fewer lines than before'],
      ['What confirms recovery?', 'Health and error metrics returning to acceptable levels', 'The rollback command reporting success by itself', 'Deleting the candidate artifact']
    ]
  },
  {
    objective: 'Distinguish CPU, RAM, storage, operating systems and virtual machines.',
    notes: [
      'The CPU executes instructions. RAM holds active program code and data and usually loses its contents on power-off. Storage holds files across restarts. The operating system allocates memory and CPU time and exposes devices through drivers and system calls.',
      'A virtual machine runs a guest OS with virtual hardware provided by a hypervisor. A guest can have fewer virtual CPUs or less memory than the host. Inspect resource measurements inside the guest when diagnosing a service running there.',
      'In a fictional scheduling system, high CPU use may indicate expensive calculations, low available RAM may cause paging or termination, and a full filesystem can prevent logs or database files from growing. Measure each resource before deciding what to upgrade.'
    ],
    flow: ['Application', 'Guest operating system', 'Virtual hardware', 'Hypervisor', 'Physical host'],
    lab: 'Identify the operating system, memory and filesystem capacity in Linux. Use the final command to record the kernel name.',
    commands: 'uname -a\nfree -h\ndf -h .\nuname -s',
    expected: 'Linux',
    troubleshooting: 'If free is unavailable, inspect /proc/meminfo. If uname reports Darwin, use a Linux VM or Linux environment.',
    recall: 'Why might the RAM visible inside a VM differ from the host?',
    questions: [
      ['What usually loses its contents when power is removed?', 'RAM', 'SSD', 'An installed application archive'],
      ['Which tool shows the capacity of the filesystem containing the current directory?', 'df -h .', 'uname -s', 'free -h'],
      ['What manages virtual guest hardware?', 'A hypervisor', 'A DNS resolver', 'A shell prompt']
    ]
  },
  {
    objective: 'Navigate a Bash session and inspect command exit status.',
    notes: [
      'A terminal displays input and output. Bash is a shell that parses what you type and starts programs or runs built-in commands. pwd prints the current working directory. Paths starting with / are absolute. Other paths are interpreted relative to the current directory.',
      'A command generally reports success with exit status zero. Read $? immediately after the command because every command replaces it. Quoting a path containing spaces keeps the shell from splitting it into several arguments.',
      'During a deployment, operators use the shell to inspect files and verify paths before running automation. A script launched from a different directory may resolve the same relative path to a different location.'
    ],
    flow: ['Terminal input', 'Bash parsing', 'Command execution', 'Output and exit status'],
    lab: 'Create a folder whose name includes a space and prove that Bash treats the name as one argument.',
    commands: "mkdir -p 'terminal lab'\ncd 'terminal lab'\npwd\nls -la\nprintf '%s\\n' ready && printf 'status=%s\\n' \"$?\"",
    expected: 'ready\nstatus=0',
    troubleshooting: 'If cd reports too many arguments, put quotes around the entire folder name.',
    recall: 'Why must you read $? immediately?',
    questions: [
      ['Which command prints the current working directory?', 'pwd', 'ls', 'cd'],
      ['What stops Bash splitting a literal path containing a space?', 'Quoting the path', 'Adding a second space', 'Dropping the directory name'],
      ['What exit status conventionally indicates success?', '0', '1', '127']
    ]
  },
  {
    objective: 'Create files and use relative paths and redirection safely.',
    notes: [
      'A file stores bytes. A directory maps names to entries such as files and other directories. A dot refers to the current directory and two dots refer to its parent. Relative paths become ambiguous when the working directory changes.',
      'The shell opens the target of > for writing, truncating an existing file before the command writes. The >> operator appends instead. Check the destination path before making changes.',
      'A deployment script can use mkdir -p to prepare missing directories and cp to retain a known-good configuration snapshot before replacing an active file.'
    ],
    flow: ['Current directory', 'Relative path lookup', 'Target entry', 'Read or write bytes'],
    lab: 'Build a small directory tree and append a second line to a file from its sibling directory.',
    commands: "mkdir -p paths-lab/input paths-lab/output\ncd paths-lab/output\nprintf 'draft\\n' > ../input/report.txt\nprintf 'approved\\n' >> ../input/report.txt\ncat ../input/report.txt",
    expected: 'draft\napproved',
    troubleshooting: 'If only approved appears, check whether the second printf used > in place of >>.',
    recall: 'Explain how ../input/report.txt resolves from output/.',
    questions: [
      ['What does .. refer to?', 'The parent directory', 'The filesystem root', 'The previous shell command'],
      ['Which redirection appends?', '>>', '>', '<'],
      ['Where does a path beginning with / start?', 'The filesystem root', 'The current working directory', 'The current user’s home directory']
    ]
  },
  {
    objective: 'Read and apply least-privilege file permissions.',
    notes: [
      'Linux permission bits are grouped for the owner, group and others. Read, write and execute carry octal values 4, 2 and 1. For a regular file, 640 grants read and write to the owner, read to the group and no access to others.',
      'Execute on a directory allows traversal. Read allows listing names. A service may have read access to the file itself and still be blocked by a parent directory it cannot traverse.',
      'For a fictional service, restrict its configuration to the service owner and the group that needs read access. Verify the resulting mode and confirm that the service runs under the expected identity.'
    ],
    flow: ['Process identity', 'Owner or group match', 'Permission bit check', 'Allow or deny operation'],
    lab: 'Create fictional configuration and observe its numeric mode. Run in GNU/Linux.',
    commands: "mkdir -p mode-lab && cd mode-lab\nprintf 'mode=demo\\n' > app.conf\nchmod 640 app.conf\nstat -c '%a' app.conf",
    expected: '640',
    troubleshooting: 'GNU stat uses -c. In a macOS shell stat uses -f %Lp for numeric permissions.',
    recall: 'Why might a readable file still be inaccessible to a service?',
    questions: [
      ['What does the 4 in mode 640 grant to the group?', 'Read', 'Write', 'Execute'],
      ['Which directory permission is needed to traverse through a known path?', 'Execute', 'Write', 'Read'],
      ['Which mode gives a file owner read/write and other users no permissions?', '600', '660', '666']
    ]
  },
  {
    objective: 'Identify a process by PID and wait for a child process to finish.',
    notes: [
      'A process is a running instance of a program with a process ID, memory and open resources. Multiple processes can run the same program independently. The shell can launch a child in the background using &.',
      'Bash stores the PID of its latest background job in $!. A shell can use wait with that PID to retrieve the child’s exit status. Processes can terminate voluntarily or respond to signals. SIGTERM usually permits cleanup while SIGKILL forces termination.',
      'A worker process that disappears may have finished normally. Check its exit status and logs in context before classifying an incident.'
    ],
    flow: ['Shell starts child', 'Kernel assigns PID', 'Child runs', 'Shell collects exit status'],
    lab: 'Start a brief background job, inspect it and collect its exit status.',
    commands: "sleep 5 &\njob_pid=$!\nps -p \"$job_pid\" -o pid,comm\nwait \"$job_pid\"\nprintf 'exit=%s\\n' \"$?\"",
    expected: 'exit=0',
    troubleshooting: 'Paste the block together. If you wait before running ps, the process may finish before inspection.',
    recall: 'Why is a PID more specific than a program name?',
    questions: [
      ['Which value identifies the most recent background job in Bash?', '$!', '$?', '$PWD'],
      ['Which built-in collects a background child’s exit status?', 'wait', 'cd', 'read'],
      ['Which signal generally allows an application a chance to clean up?', 'SIGTERM', 'SIGKILL', 'SIGSTOP']
    ]
  },
  {
    objective: 'Distinguish a service definition, running process and health check.',
    notes: [
      'A service manager maintains background programs. On a systemd Linux host, a unit describes how a service is started and supervised. Loaded describes whether the unit definition was read. Active describes its runtime state. Enabled generally means configured to start through the system’s target dependencies.',
      'systemctl status UNIT shows recorded state and a log excerpt. journalctl -u UNIT displays unit-specific logs. Some containers and Linux environments have a different PID 1 and cannot use systemctl to manage services.',
      'An active web service may still return errors. Diagnose in layers by reading manager state, logs and the application response.'
    ],
    flow: ['Service definition', 'Service manager', 'Background process', 'Application health check'],
    lab: 'Identify the Linux process with PID 1 and inspect its name and arguments.',
    commands: "ps -p 1 -o pid,comm,args\n[ -r /proc/1/status ] && printf 'pid1-visible\\n'",
    expected: 'pid1-visible',
    troubleshooting: 'Use a Linux environment with /proc mounted. If PID 1 is systemd, compare the lab output with systemctl list-units --type=service --state=running.',
    recall: 'What evidence would show a service is healthy for its callers?',
    questions: [
      ['What does enabling a typical systemd unit configure?', 'Startup through target dependencies', 'An automatic fix for failed requests', 'Public network access'],
      ['Which command filters systemd journal entries by unit?', 'journalctl -u UNIT', 'chmod UNIT', 'pwd UNIT'],
      ['What should you check when the service is active but users see errors?', 'Application response and logs', 'Only the enabled flag', 'Only the unit filename']
    ]
  },
  {
    objective: 'Inspect an installed package without installing or upgrading software.',
    notes: [
      'A package contains software and metadata about its version, dependencies and files. A package manager reads repository metadata, resolves dependencies and records installed packages. Debian-family tools use dpkg for local package records and APT for repository operations.',
      'apt update refreshes repository metadata. An upgrade changes installed packages and can restart workloads. In an operations environment, review the proposed changes and use an approved maintenance process for upgrades.',
      'Package ownership helps trace a binary to its installed version. A locally compiled binary on PATH can override the package-manager version. Compare the executable path and the package database when versions disagree.'
    ],
    flow: ['Repository metadata', 'Dependency resolution', 'Package files', 'Installed package database'],
    lab: 'Use dpkg-query to inspect a fictional installed-package record in a disposable directory.',
    commands: "mkdir -p package-lab\ncat > package-lab/status <<'STATUS'\nPackage: rota-demo\nStatus: install ok installed\nArchitecture: all\nVersion: 1.0\nMaintainer: Academy Lab <lab@example.invalid>\nDescription: Fictional scheduling service\nSTATUS\ndpkg-query --admindir=\"$PWD/package-lab\" -W rota-demo",
    expected: 'rota-demo\t1.0',
    troubleshooting: 'If dpkg-query is missing, use Debian or Ubuntu. Check that package-lab/status contains the full record.',
    recall: 'Explain how package metadata and the installed package database differ.',
    questions: [
      ['What does apt update refresh?', 'Repository metadata', 'All installed binaries', 'Only the Bash process'],
      ['What does a package dependency describe?', 'Another package needed by the software', 'A mandatory DNS subnet', 'A backup filename'],
      ['What can cause a command to use a locally installed binary?', 'Its directory appears earlier in PATH', 'The package record has more characters', 'The current date changed']
    ]
  },
  {
    objective: 'Use shell variables, quoting and environment inheritance.',
    notes: [
      'A Bash assignment uses NAME=value without surrounding spaces. A double-quoted expansion such as "$NAME" preserves spaces in the value and prevents pathname expansion. Single quotes preserve the literal characters inside them.',
      'A shell variable is local to that shell until exported into the environment. Descendant processes inherit a copy. A child process cannot change the parent shell’s environment by changing its own copy.',
      'An application can read a non-sensitive setting such as its environment name at startup. Review how values are supplied on the runtime platform and avoid printing credentials into logs.'
    ],
    flow: ['Shell assignment', 'Export into environment', 'Child process inherits value', 'Application reads setting'],
    lab: 'Compare local and exported values in child Bash processes.',
    commands: "unset ACADEMY_STAGE\nACADEMY_STAGE='training lab'\nbash -c 'printf \"%s\\n\" \"${ACADEMY_STAGE:-unset}\"'\nexport ACADEMY_STAGE\nbash -c 'printf \"%s\\n\" \"$ACADEMY_STAGE\"'",
    expected: 'unset\ntraining lab',
    troubleshooting: 'Use single quotes around the code passed to bash -c so the parent shell leaves the expansion to the child.',
    recall: 'Why does the first child shell report unset?',
    questions: [
      ['Which assignment is valid Bash?', 'STAGE=training', 'STAGE = training', 'STAGE =training'],
      ['Which built-in makes a shell variable available to child processes?', 'export', 'wait', 'pwd'],
      ['What do double quotes around "$STAGE" preserve?', 'A value with spaces as one argument', 'The literal characters $STAGE', 'Only the first word']
    ]
  },
  {
    objective: 'Write a Bash script with an input check and deliberate exit codes.',
    notes: [
      'A script groups commands into a repeatable operation. Running bash script.sh selects Bash explicitly. The first positional argument is $1. The expression ${1:-} supplies an empty default when the argument is absent.',
      'The test [ -f "$path" ] checks whether a path names an existing regular file. Use conditionals to define success and failure paths. Send error messages to standard error and return an exit code callers can check.',
      'A scheduled job should run with explicit paths and predictable inputs because its environment can differ from an interactive login. Test both branches before scheduling the job.'
    ],
    flow: ['Input argument', 'Regular-file check', 'Success output or error', 'Exit status to caller'],
    lab: 'Create a script for a fictional deployment preflight and run both result paths.',
    commands: "mkdir -p script-lab && cd script-lab\ncat > preflight.sh <<'SCRIPT'\npath=${1:-}\nif [ ! -f \"$path\" ]; then\n  printf 'missing file\\n' >&2\n  exit 2\nfi\nprintf 'ready\\n'\nSCRIPT\ntouch evidence.txt\nbash preflight.sh evidence.txt\nbash preflight.sh missing-file\nprintf 'failure=%s\\n' \"$?\"",
    expected: 'ready\nmissing file\nfailure=2',
    troubleshooting: 'Keep the here-document delimiter SCRIPT at the start of its line. Run the failing case separately if your existing shell exits on errors.',
    recall: 'How can a pipeline detect a failed preflight without reading its prose output?',
    questions: [
      ['Which Bash parameter contains the first script argument?', '$1', '$!', '$?'],
      ['Where does >&2 send output?', 'Standard error', 'A file named 2', 'Standard input'],
      ['Which outcome should a missing required file produce in this lab?', 'An error message and exit status 2', 'A success message and exit status 0', 'A silently created replacement file']
    ]
  }
];
