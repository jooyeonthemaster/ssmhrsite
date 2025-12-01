"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { UserCog, Briefcase, GraduationCap, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "HR 아웃소싱",
    desc: "효율적인 인력 운영을 위한 맞춤형 아웃소싱 서비스를 제공합니다.",
    icon: Briefcase,
    color: "bg-blue-50 text-brand-blue"
  },
  {
    title: "HR/IR 컨설팅",
    desc: "인적자원관리 및 노사관계에 대한 전문적인 진단과 솔루션을 제시합니다.",
    icon: Handshake,
    color: "bg-orange-50 text-brand-gold"
  },
  {
    title: "헤드헌팅",
    desc: "기업의 핵심이 될 우수 인재를 발굴하고 검증하여 추천합니다.",
    icon: UserCog,
    color: "bg-slate-50 text-slate-700"
  },
  {
    title: "교육 및 강의",
    desc: "조직 역량 강화를 위한 실무 중심의 기업 교육 프로그램을 운영합니다.",
    icon: GraduationCap,
    color: "bg-slate-50 text-slate-700"
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50/50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            문서가 아닌 <span className="text-brand-blue">결과</span>로 증명합니다
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            각 분야 전문가들이 심층 분석하여 장단기 대책을 수립하고,<br />
            결과를 지속적으로 모니터링하여 실질적인 성과를 만듭니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

