import { PageContainer } from "../layout/PageContainer";
import { SectionHeader } from "../shared/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  FolderOpen,
  MessageSquare,
  Image as ImageIcon,
  CheckSquare,
  Clock,
  Download,
  Upload,
  Send,
  Calendar,
  Lock,
} from "lucide-react";

interface ClientPortalProps {
  onNavigate: (page: string) => void;
}

export function ClientPortal({ onNavigate }: ClientPortalProps) {
  // Mock data - in production this would come from a backend
  const project = {
    name: "E-Commerce Redesign",
    phase: "Development & Integration",
    progress: 65,
    dueDate: "Dec 15, 2025",
  };

  const recentFiles = [
    {
      name: "Homepage_Design_v3.fig",
      type: "Design",
      date: "Nov 12, 2025",
      size: "2.4 MB",
    },
    {
      name: "Brand_Guidelines.pdf",
      type: "Documentation",
      date: "Nov 10, 2025",
      size: "8.1 MB",
    },
    {
      name: "Component_Library.zip",
      type: "Assets",
      date: "Nov 8, 2025",
      size: "15.3 MB",
    },
  ];

  const messages = [
    {
      from: "AIONIQ Team",
      message: "Homepage designs are ready for your review",
      time: "2 hours ago",
      unread: true,
    },
    {
      from: "You",
      message: "Love the direction! Can we adjust the hero section?",
      time: "Yesterday",
      unread: false,
    },
    {
      from: "AIONIQ Team",
      message: "Week 8 progress update is available",
      time: "2 days ago",
      unread: false,
    },
  ];

  const tasks = [
    {
      title: "Review Homepage Design",
      status: "pending",
      dueDate: "Nov 18",
      priority: "high",
    },
    {
      title: "Provide Product Images",
      status: "pending",
      dueDate: "Nov 20",
      priority: "medium",
    },
    {
      title: "Approve Brand Colors",
      status: "completed",
      dueDate: "Nov 10",
      priority: "high",
    },
    {
      title: "Content Review",
      status: "completed",
      dueDate: "Nov 5",
      priority: "medium",
    },
  ];

  const activities = [
    {
      action: "File uploaded",
      description: "Homepage_Design_v3.fig",
      time: "2 hours ago",
    },
    {
      action: "Task completed",
      description: "Brand color approval",
      time: "5 hours ago",
    },
    {
      action: "Message sent",
      description: "Design feedback received",
      time: "Yesterday",
    },
    {
      action: "Milestone reached",
      description: "Design phase completed",
      time: "3 days ago",
    },
  ];

  return (
    <PageContainer>
      <div className="py-12">
        {/* Access Notice */}
        <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-lg flex items-start gap-3">
          <Lock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="mb-1">Protected Area</h4>
            <p className="text-sm text-muted-foreground">
              This is a wireframe preview of the Client Portal. In production, this area requires
              authentication and displays project-specific data.
            </p>
          </div>
        </div>

        <SectionHeader
          title="Client Portal"
          subtitle="Track your project progress, access files, communicate with the team, and manage deliverables all in one place."
        />

        {/* Project Overview */}
        <div className="mb-8 p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="mb-2">{project.name}</h2>
              <p className="opacity-90">Current Phase: {project.phase}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm opacity-90 mb-1">Due Date</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.dueDate}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Overall Progress</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2 bg-primary-foreground/20" />
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dashboard" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm">Total Files</CardTitle>
                  <FolderOpen className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl">24</div>
                  <p className="text-xs text-muted-foreground">3 added this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm">Pending Tasks</CardTitle>
                  <CheckSquare className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl">2</div>
                  <p className="text-xs text-muted-foreground">Due this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm">Messages</CardTitle>
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl">1</div>
                  <p className="text-xs text-muted-foreground">Unread message</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm">Days Remaining</CardTitle>
                  <Clock className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl">29</div>
                  <p className="text-xs text-muted-foreground">Until launch</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div className="flex-1">
                        <p className="mb-1">
                          <span>{activity.action}</span>
                          <span className="text-muted-foreground">: {activity.description}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Files Tab */}
          <TabsContent value="files" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3>Project Files</h3>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload File
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {recentFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FolderOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="mb-1">{file.name}</p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Badge variant="secondary">{file.type}</Badge>
                        <span>{file.date}</span>
                        <span>{file.size}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    message.unread
                      ? "bg-primary/5 border-primary/20"
                      : "bg-card border-border"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span>{message.from}</span>
                    <span className="text-sm text-muted-foreground">{message.time}</span>
                  </div>
                  <p className="text-muted-foreground">{message.message}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <textarea
                placeholder="Type your message..."
                className="w-full bg-transparent border-0 outline-none resize-none mb-3"
                rows={3}
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value="tasks" className="space-y-6">
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={task.status === "completed"}
                        readOnly
                        className="mt-1"
                      />
                      <div>
                        <p
                          className={`mb-2 ${
                            task.status === "completed"
                              ? "line-through text-muted-foreground"
                              : ""
                          }`}
                        >
                          {task.title}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={task.priority === "high" ? "destructive" : "secondary"}
                          >
                            {task.priority}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            Due: {task.dueDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
