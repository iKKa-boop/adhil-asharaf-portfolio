export const personal = {
  name: "Adhil Asharaf",
  title: "Linux System Administrator",
  location: "Pathanamthitta, Kerala",
  email: "adhilasharaf07@gmail.com",
  linkedin: "linkedin.com/in/adhil-asharaf",
  summary:
    "Linux System Administrator with expertise in server administration, virtualization (Proxmox, Docker), networking, and automation scripting. Led OnApp-to-Proxmox migration (100+ VMs), developed NIC firmware automation (Intel/Mellanox/Broadcom), and manages 50+ enterprise clients with 99.9% SLA compliance.",
} as const;

export const stats = [
  { value: "100+", label: "VMs Migrated" },
  { value: "80%", label: "Time Reduction" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "99.9%", label: "SLA Compliance" },
] as const;

export const experience = [
  {
    company: "Hashroot Limited",
    location: "Kochi",
    role: "L2 Server Administrator",
    period: "Feb 2026 – Present",
    highlights: [
      "Lead onsite server setup/maintenance for 50+ enterprise clients (99.9% uptime SLA)",
      "Developed automated NIC firmware update script (Intel/Mellanox/Broadcom) with documentation, reducing manual time by 80%",
      "Primary escalation point for complex Linux/Windows infrastructure issues",
      "Manage physical servers: hardware integrity, RAID, iSCSI, multipathing, operational continuity",
    ],
  },
  {
    company: "Hashroot Limited",
    location: "Kochi",
    role: "L1 Server Administrator",
    period: "Jan 2026 – Feb 2026",
    highlights: [
      "Handled server support across Linux (Ubuntu, CentOS, RHEL) and Windows Server environments",
      "Diagnosed/replaced faulty hardware (HDD, RAM, RAID controllers), reducing downtime 40%",
      "Performed performance benchmarking with automated scripts to identify bottlenecks",
      "Troubleshot OS/network/application issues; documented solutions for knowledge base",
    ],
  },
  {
    company: "Hashroot Limited",
    location: "Kochi",
    role: "Junior Server Administrator",
    period: "Jan 2025 – Jan 2026",
    highlights: [
      "Led OnApp-to-Proxmox migration: 100+ VMs with zero data loss",
      "Provisioned/managed VMs on Proxmox VE with resource optimization and HA clustering",
      "Provisioned bare-metal servers with Linux distributions and Windows Server editions",
      "Implemented backup strategies; monitored logs for proactive issue detection",
    ],
  },
  {
    company: "Hashroot Limited",
    location: "Kochi",
    role: "Server Administrator Intern",
    period: "Nov 2024 – Jan 2025",
    highlights: [
      "Managed 200+ client domains on Linux web servers (Apache, Nginx, Caddy) via cPanel/Plesk",
      "Performed automated backups, site migrations, SSL certificate management",
      "Monitored performance using Zabbix/Grafana; configured email services (SMTP/IMAP/POP3)",
    ],
  },
  {
    company: "Synnefo Solutions",
    location: "Kochi",
    role: "Network Support Engineer Intern",
    period: "Jan 2023 – April 2023",
    highlights: [
      "Configured routing protocols (OSPF, EIGRP), DHCP, DNS, NAT for enterprise networks",
      "Managed Windows Server 2022: Active Directory, Group Policy, user management",
      "Designed IPv4 addressing with VLSM subnetting; configured firewall policies (iptables)",
    ],
  },
] as const;

export const skills = [
  {
    category: "Operating Systems",
    items: ["Ubuntu", "CentOS", "RHEL", "Rocky Linux", "Debian", "Windows Server"],
  },
  {
    category: "Linux Admin",
    items: ["systemd", "LVM", "RAID", "systemctl", "journalctl", "user/group management", "permissions", "cron", "apt", "yum", "dnf"],
  },
  {
    category: "Automation / Scripting",
    items: ["Bash", "Python", "NIC firmware automation", "awk", "sed", "grep", "rsync"],
  },
  {
    category: "Virtualization / Containers",
    items: ["Proxmox VE", "Docker", "VM migration", "KVM", "EasyDCIM"],
  },
  {
    category: "CI/CD & VCS",
    items: ["Git", "Gitea", "GitHub", "GitHub Actions", "Argo CD"],
  },
  {
    category: "AI Tools",
    items: ["opencode", "Claude"],
  },
  {
    category: "Networking",
    items: ["TCP/IP", "DNS", "DHCP", "OSPF", "EIGRP", "NAT", "VLANs", "VPN", "iptables", "SSH", "tcpdump", "nmap", "dig"],
  },
  {
    category: "Monitoring / Security",
    items: ["Zabbix", "Grafana", "fail2ban", "SELinux", "system hardening", "top", "htop", "vmstat"],
  },
  {
    category: "Web Servers",
    items: ["Apache", "Nginx", "Caddy", "cPanel", "Plesk", "SMTP/IMAP/POP3", "SSL/TLS"],
  },
  {
    category: "Hardware / Storage",
    items: ["Server provisioning", "hardware diagnostics", "benchmarking", "onsite maintenance", "iSCSI", "multipathing"],
  },
  {
    category: "Backup / Recovery",
    items: ["tar", "dd", "rsync", "disaster recovery", "Proxmox backup"],
  },
  {
    category: "Tools",
    items: ["vi/vim", "nano", "lsof", "find", "fdisk", "parted", "logrotate"],
  },
] as const;

export const projects = [
  {
    title: "NIC Firmware Automation",
    description:
      "Developed automated firmware update script supporting Intel, Mellanox, and Broadcom NICs with comprehensive documentation. Reduced manual intervention time by 80% across the server fleet.",
    tech: ["Bash", "Python", "Intel", "Mellanox", "Broadcom"],
  },
  {
    title: "OnApp to Proxmox Migration",
    description:
      "Architected and executed migration of 100+ virtual machines from deprecated OnApp platform to Proxmox VE with zero data loss. Implemented HA clustering and resource optimization.",
    tech: ["Proxmox VE", "KVM", "HA Clustering", "VM Migration"],
  },
  {
    title: "Enterprise Server Infrastructure",
    description:
      "Manage physical and virtual infrastructure for 50+ enterprise clients including hardware provisioning, RAID configuration, iSCSI storage, and multipathing. Maintained 99.9% SLA compliance.",
    tech: ["RAID", "iSCSI", "Multipathing", "Server Provisioning"],
  },
  {
    title: "Abuse Operations Console V2",
    description:
      "Internal abuse reporting tool with browser extension for URL checking, report generation, and evidence logging. Containerized with Docker for easy deployment and scaling. Streamlined abuse handling workflow for FDC Servers support team.",
    tech: ["Browser Extension", "Node.js", "Docker", "nginx"],
  },
  {
    title: "WHMCS Ticket Logger",
    description:
      "Browser extension (Chrome & Firefox) that automatically logs WHMCS support tickets when replies are submitted. Improved ticket tracking efficiency and reduced manual logging overhead for FDC Servers support team.",
    tech: ["Browser Extension", "JavaScript", "WHMCS", "Chrome", "Firefox"],
  },
  {
    title: "Support Toolbox",
    description:
      "Collection of bash scripts for FDC Servers support team. Includes diagnostic tools, automation scripts, and integration scripts for WHMCS, EasyDCIM, LibreNMS, and Proxmox. Containerized where applicable for consistent execution across environments. Speeds up repeat operational tasks.",
    tech: ["Bash", "Automation", "WHMCS", "Proxmox", "EasyDCIM", "Docker"],
  },
  {
    title: "Outline Knowledge Base",
    description:
      "Self-hosted wiki and knowledge base for FDC Servers support team. Contains all SOPs, edge cases, troubleshooting guides, and operational documentation built up over the course of work. Containerized with Docker Compose for easy deployment. Enables consistent ticket resolution and knowledge sharing across the team.",
    tech: ["Node.js", "PostgreSQL", "Redis", "MinIO", "Docker"],
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Computer Application",
    institution: "Mahatma Gandhi University",
    location: "Kerala",
    period: "2019 – 2022",
  },
  {
    degree: "Higher Secondary",
    institution: "Mary Matha Public School",
    location: "Kerala",
    period: "2019",
  },
] as const;

export const certifications = [
  "Network Engineering — Synnefo Solutions",
  "Docker Foundations Professional Certificate — LinkedIn",
] as const;
