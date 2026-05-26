import React from 'react';
import { H1, H2, H3, Body, BodySmall, Button } from '@/components/ui';
import { Container, Flex, Stack, Grid } from '@/components/ui';
import { StaggerContainer, StaggerItem, ScrollReveal, FadeScale } from '@/lib/motionComponents';
import { ArrowRight, Shield, Brain, Heart, TrendingUp, Lock } from 'lucide-react';

/**
 * VIRUJ HEALTH HOMEPAGE
 * Premium healthcare UI - The future operating system for personal healthcare
 */

// Hero Section
export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFFFFF] to-[#F7FAF9] pt-32 pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#0F766E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#991B1B]/5 rounded-full blur-3xl" />
      </div>

      <Container size="lg" className="relative z-10">
        <Grid cols={2} responsive={true} gap="lg" className="items-center">
          {/* Left: Messaging */}
          <StaggerContainer stagger={0.15} delay={0.1}>
            <StaggerItem>
              <H1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Healthcare,{' '}
                <span className="bg-gradient-to-r from-[#0F766E] to-[#991B1B] bg-clip-text text-transparent">
                  intelligently simplified
                </span>
              </H1>
            </StaggerItem>

            <StaggerItem>
              <Body className="text-lg text-[#475569] max-w-lg">
                Meet your personal healthcare operating system. Seamless doctor discovery, 
                AI-powered insights, and continuity of care—all in one calm, premium experience.
              </Body>
            </StaggerItem>

            <StaggerItem>
              <Flex gap="md" wrap={true}>
                <Button variant="primary" size="lg">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="tertiary" size="lg">
                  Watch Demo
                </Button>
              </Flex>
            </StaggerItem>

            <StaggerItem>
              <BodySmall className="text-[#9CA3AF]">
                ✓ HIPAA Compliant  ✓ ISO 27001 Certified  ✓ No CC Required
              </BodySmall>
            </StaggerItem>
          </StaggerContainer>

          {/* Right: Product Preview (Placeholder for now) */}
          <FadeScale delay={0.3}>
            <div className="bg-gradient-to-br from-[#F7FAF9] to-[#F3F6F5] rounded-3xl p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">📱</div>
                <Body className="text-[#9CA3AF]">Premium Dashboard Preview</Body>
              </div>
            </div>
          </FadeScale>
        </Grid>
      </Container>
    </section>
  );
};

// Ecosystem Overview
export const EcosystemSection: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Doctor Discovery',
      description: 'Find verified healthcare professionals in seconds with smart recommendations.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Appointments',
      description: 'Book, reschedule, and manage your healthcare timeline seamlessly.',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Health Insights',
      description: 'Get contextual, medically-reviewed recommendations powered by healthcare AI.',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Medical Records',
      description: 'Secure, organized digital health records with privacy-first architecture.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Diagnostics',
      description: 'Upload, track, and analyze diagnostic results with AI assistance.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Care Continuity',
      description: 'Seamless communication between you, your doctors, and your records.',
    },
  ];

  return (
    <section className="w-full bg-[#F7FAF9] py-20 px-6">
      <Container size="lg">
        <Stack spacing="xl" align="center" className="mb-16">
          <H2 className="text-center">
            Your Complete Healthcare Ecosystem
          </H2>
          <Body className="text-center text-[#475569] max-w-2xl">
            Every feature designed to reduce friction, increase clarity, and put you in control of your health.
          </Body>
        </Stack>

        <Grid cols={3} responsive={true} gap="lg">
          {features.map((feature, index) => (
            <ScrollReveal key={index}>
              <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E5E7EB] hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all">
                <div className="text-[#0F766E] mb-4">{feature.icon}</div>
                <H3 className="text-xl font-semibold mb-3">{feature.title}</H3>
                <Body className="text-[#475569]">{feature.description}</Body>
              </div>
            </ScrollReveal>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

// AI Intelligence Layer
export const AIIntelligenceSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6">
      <Container size="lg">
        <Grid cols={2} responsive={true} gap="lg" className="items-center">
          <FadeScale>
            <div className="bg-gradient-to-br from-[#0F766E]/10 to-[#991B1B]/10 rounded-3xl p-12 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <Body className="text-[#9CA3AF]">AI Intelligence Visualization</Body>
              </div>
            </div>
          </FadeScale>

          <StaggerContainer stagger={0.1} delay={0.2}>
            <StaggerItem>
              <H2>Powered by Healthcare Intelligence</H2>
            </StaggerItem>

            <StaggerItem>
              <Body className="text-[#475569]">
                Our AI assistant is not a chatbot. It's a calm, contextual healthcare intelligence layer that helps you:
              </Body>
            </StaggerItem>

            <StaggerItem>
              <Stack spacing="md">
                {[
                  'Understand your health data and test results',
                  'Get personalized wellness recommendations',
                  'Prepare for doctor appointments',
                  'Track medication and treatment plans',
                  'Connect health insights across visits',
                ].map((item, i) => (
                  <Flex key={i} gap="md" align="start">
                    <div className="text-[#0F766E] font-bold mt-1">✓</div>
                    <Body>{item}</Body>
                  </Flex>
                ))}
              </Stack>
            </StaggerItem>

            <StaggerItem>
              <BodySmall className="text-[#9CA3AF] italic">
                Medical-grade safe. Never replaces professional advice. Always transparent.
              </BodySmall>
            </StaggerItem>
          </StaggerContainer>
        </Grid>
      </Container>
    </section>
  );
};

// Care Continuity Timeline
export const CareContinuitySection: React.FC = () => {
  const steps = [
    { title: 'Discover', description: 'Find verified healthcare professionals' },
    { title: 'Connect', description: 'Schedule appointments seamlessly' },
    { title: 'Prepare', description: 'AI helps you prepare for visits' },
    { title: 'Visit', description: 'Telemedicine or in-person care' },
    { title: 'Understand', description: 'AI explains results and next steps' },
    { title: 'Track', description: 'Continuous care timeline' },
  ];

  return (
    <section className="w-full bg-[#F3F6F5] py-20 px-6">
      <Container size="lg">
        <Stack spacing="xl" align="center" className="mb-16">
          <H2 className="text-center">Your Healthcare Journey</H2>
          <Body className="text-center text-[#475569] max-w-2xl">
            Every interaction is designed for seamless continuity and clarity.
          </Body>
        </Stack>

        <Grid cols={3} responsive={true} gap="md">
          {steps.map((step, i) => (
            <ScrollReveal key={i}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#0F766E] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {i + 1}
                </div>
                <H3 className="text-lg font-semibold mb-2">{step.title}</H3>
                <Body className="text-[#475569]">{step.description}</Body>
              </div>
            </ScrollReveal>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

// CTA Section
export const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#0F766E] to-[#991B1B] py-20 px-6 text-white">
      <Container size="md">
        <Stack spacing="lg" align="center" className="text-center">
          <H2 className="text-white">Ready to Transform Your Healthcare?</H2>
          <Body className="text-[#E8F0F5]">
            Join thousands of patients taking control of their health with Viruj.
          </Body>
          <Flex gap="md" justify="center">
            <Button variant="primary" size="lg" className="bg-white text-[#0F766E] hover:bg-[#F7FAF9]">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Flex>
        </Stack>
      </Container>
    </section>
  );
};
