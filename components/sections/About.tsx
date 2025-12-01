"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Users, ShieldCheck, TrendingUp, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "20 Years of Excellence",
    subtitle: "분야별 전문가 그룹",
    desc: "각 분야 20년 이상 경력자들이 힘을 모아 기업의 성장을 지원합니다.",
    icon: Briefcase,
    className: "lg:col-span-2 bg-slate-900 text-white",
    iconClass: "text-brand-gold"
  },
  {
    title: "Employee First",
    subtitle: "사람이 미래다",
    desc: "좋은 직원 1명은 1000명을 먹여 살립니다. 인재 발굴은 기업 생존의 핵심입니다.",
    icon: Users,
    className: "bg-white border border-slate-200",
    iconClass: "text-brand-blue"
  },
  {
    title: "Partner for Growth",
    subtitle: "동반 성장",
    desc: "혼자는 빨리 갈 수 있지만, 멀리 가려면 함께 가야 합니다. 든든한 파트너가 되겠습니다.",
    icon: TrendingUp,
    className: "bg-white border border-slate-200",
    iconClass: "text-brand-blue"
  },
  {
    title: "Problem Solver",
    subtitle: "확실한 해결",
    desc: "고객의 입장에서 고민하고, 실질적이고 구체적인 해결책을 제시합니다.",
    icon: ShieldCheck,
    className: "lg:col-span-2 bg-blue-50 text-brand-navy border border-blue-100",
    iconClass: "text-brand-blue"
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        {/* Vision Statement */}
        <div className="mb-24 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            About SSMHR
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight"
          >
            기업과 사회의 가치를 높이는<br />
            <span className="text-brand-blue">선한이웃</span>입니다.
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="prose prose-lg text-slate-600 leading-relaxed"
          >
            <p className="text-xl text-slate-800 font-medium mb-6">
              "진실되고 실질적인 HR을 위하여 최고의 노력으로 기여하겠습니다."
            </p>
            <p className="mb-6">
              안녕하십니까, 선한이웃(SSMHR)입니다. 저희는 늘 절박한 심정의 마음을 깊이 이해하고 헤아리며, 
              단순한 인력 공급을 넘어 기업의 문제를 함께 해결하는 진정한 파트너가 되고자 합니다.
            </p>
            <p>
              인적자원 관리는 철저해야 기업의 미래가 있습니다. 
              험난하고 위험한 비즈니스 환경 속에서, 오랫동안 귀사의 가장 든든한 동반자가 되어 드리겠습니다.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "p-8 rounded-3xl flex flex-col justify-between min-h-[240px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                item.className
              )}
            >
              <div className="mb-6">
                <item.icon className={cn("w-10 h-10 mb-4", item.iconClass)} />
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <span className="text-sm font-medium opacity-60 uppercase tracking-wider">{item.subtitle}</span>
              </div>
              <p className={cn("text-lg leading-snug opacity-90 font-light", item.className.includes("bg-slate-900") ? "text-slate-300" : "text-slate-600")}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
