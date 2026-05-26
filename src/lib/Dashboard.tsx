import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flex, Stack, Container, H2, H3, Body, Button, Card, CardContent, CardHeader, CardTitle, Badge, Grid } from '@/components/ui';
import { Heart, Calendar, Brain, FileText, Users, Settings, Bell, Search, LogOut, Menu, X } from 'lucide-react';

/**
 * DASHBOARD LAYOUT & COMPONENTS
 * Premium healthcare dashboard experience
 */

// Sidebar Navigation
interface SidebarNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: <Heart className="w-5 h-5" />, label: 'Overview', active: true },
    { icon: <Calendar className="w-5 h-5" />, label: 'Appointments', active: false },
    { icon: <Brain className="w-5 h-5" />, label: 'AI Insights', active: false },
    { icon: <FileText className="w-5 h-5" />, label: 'Records', active: false },
    { icon: <Users className="w-5 h-5" />, label: 'Doctors', active: false },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', active: false },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ duration: 0.3 }}
        className="fixed lg:static left-0 top-0 z-40 w-64 h-screen bg-[#F7FAF9] border-r border-[#E5E7EB] flex flex-col overflow-y-auto lg:translate-x-0"
      >
        {/* Header */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0F766E] to-[#991B1B] flex items-center justify-center">
              <span className="text-white font-bold text-xs">VH</span>
            </div>
            <span className="font-bold text-sm">Viruj</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-[#E5E7EB] rounded transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-2">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                item.active
                  ? 'bg-[#0F766E]/10 text-[#0F766E] font-medium'
                  : 'text-[#475569] hover:bg-[#E5E7EB]'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-[#E5E7EB] p-6">
          <Button variant="ghost" size="md" fullWidth className="justify-start text-red-600">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </motion.aside>
    </>
  );
};

// Top Header
interface TopHeaderProps {
  onMenuClick: () => void;
  userName?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ onMenuClick, userName = 'Alex' }) => {
  return (
    <div className="h-16 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Left: Menu & Search */}
      <Flex gap="md" align="center">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-[#F3F6F5] rounded transition"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden md:flex relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search doctors, records..."
            className="pl-10 pr-4 py-2 bg-[#F3F6F5] border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20"
          />
        </div>
      </Flex>

      {/* Right: User Menu */}
      <Flex gap="md" align="center">
        <button className="p-2 hover:bg-[#F3F6F5] rounded-lg transition relative">
          <Bell className="w-5 h-5 text-[#475569]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#DC2626] rounded-full" />
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-[#E5E7EB]">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium text-[#0F172A]">{userName}</div>
            <div className="text-xs text-[#9CA3AF]">Patient</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F766E] to-[#0F766E] flex items-center justify-center text-white font-bold cursor-pointer">
            {userName[0]}
          </div>
        </div>
      </Flex>
    </div>
  );
};

// Health Summary Card
const HealthSummary: React.FC = () => {
  return (
    <Card variant="default">
      <CardHeader>
        <CardTitle>Your Health Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Grid cols={3} gap="md">
          {[
            { label: 'BMI', value: '22.5', status: 'Healthy' },
            { label: 'Blood Pressure', value: '120/80', status: 'Normal' },
            { label: 'Last Checkup', value: '15 days ago', status: 'Due in 345 days' },
          ].map((item, i) => (
            <div key={i}>
              <Body className="text-[#9CA3AF] mb-2">{item.label}</Body>
              <H3 className="text-2xl mb-1">{item.value}</H3>
              <Badge variant="success" size="sm">
                {item.status}
              </Badge>
            </div>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

// Upcoming Appointments
const UpcomingAppointments: React.FC = () => {
  const appointments = [
    {
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: 'Tomorrow, 2:00 PM',
      type: 'Video Call',
    },
    {
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practice',
      date: 'Mar 15, 10:30 AM',
      type: 'In-Person',
    },
  ];

  return (
    <Card variant="default">
      <CardHeader>
        <CardTitle>Upcoming Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack spacing="md">
          {appointments.map((appt, i) => (
            <div key={i} className="pb-4 border-b border-[#E5E7EB] last:border-0">
              <Flex justify="between" align="start" className="mb-2">
                <div>
                  <Body className="font-medium">{appt.doctor}</Body>
                  <Body className="text-sm text-[#9CA3AF]">{appt.specialty}</Body>
                </div>
                <Badge variant="primary">{appt.type}</Badge>
              </Flex>
              <Body className="text-sm text-[#9CA3AF]">{appt.date}</Body>
            </div>
          ))}
        </Stack>
        <Button variant="secondary" fullWidth size="md" className="mt-4">
          View All Appointments
        </Button>
      </CardContent>
    </Card>
  );
};

// AI Insights Widget
const AIInsights: React.FC = () => {
  return (
    <Card variant="elevated" className="bg-gradient-to-br from-[#991B1B]/5 to-[#0F766E]/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-[#991B1B]" />
          AI Health Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Stack spacing="md">
          <div className="p-4 bg-white rounded-lg border border-[#E5E7EB]">
            <Body className="text-sm font-medium mb-2">Recommended: Stay Hydrated</Body>
            <Body className="text-xs text-[#9CA3AF]">
              Based on your recent activities and weather, maintaining hydration is important. You've been active lately.
            </Body>
          </div>
          <div className="p-4 bg-white rounded-lg border border-[#E5E7EB]">
            <Body className="text-sm font-medium mb-2">Appointment Preparation</Body>
            <Body className="text-xs text-[#9CA3AF]">
              Your cardiology appointment is tomorrow. We've prepared a summary of your recent health metrics.
            </Body>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
};

// Main Dashboard Component
export const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F7FAF9]">
      {/* Sidebar */}
      <SidebarNav isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <TopHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          <Container size="xl" padding="lg" className="py-8">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <H2>Welcome back, Alex!</H2>
              <Body className="text-[#9CA3AF]">Here's your health overview for today</Body>
            </motion.div>

            {/* Dashboard Grid */}
            <Grid cols={3} responsive={true} gap="lg" className="mb-8">
              {/* Health Summary (spans 2 on desktop) */}
              <div className="lg:col-span-2">
                <HealthSummary />
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                {[
                  { icon: '💊', label: 'Medications', value: '3 Active' },
                  { icon: '⚠️', label: 'Allergies', value: '2 Recorded' },
                  { icon: '📋', label: 'Reports', value: '12 Total' },
                ].map((stat, i) => (
                  <Card key={i} variant="default">
                    <CardContent className="pt-4">
                      <Flex align="center" gap="md">
                        <div className="text-3xl">{stat.icon}</div>
                        <div>
                          <Body className="text-xs text-[#9CA3AF]">{stat.label}</Body>
                          <Body className="font-semibold">{stat.value}</Body>
                        </div>
                      </Flex>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Grid>

            {/* Appointments & AI Insights */}
            <Grid cols={2} responsive={true} gap="lg">
              <UpcomingAppointments />
              <AIInsights />
            </Grid>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
