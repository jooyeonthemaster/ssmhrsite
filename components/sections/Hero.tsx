"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy pt-20">
      {/* Background Image & Effects */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/title.jpg" 
          alt="SSMHR Office View" 
          fill 
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-navy to-transparent"></div>
        
        {/* Subtle Noise Texture for cinematic feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-sm font-medium text-blue-100 tracking-wide">SSMHR Corporate Vision</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          >
            기업의 가치를 높이는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
              가장 선한 파트너
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-lg"
          >
            진실된 HR 솔루션으로 기업의 내일을 함께 설계합니다.<br className="hidden md:block" />
            SSMHR은 단순한 관리를 넘어, 성장의 동반자가 되겠습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg bg-brand-gold hover:bg-amber-600 text-white border-none rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-900/30"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              서비스 문의하기
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 hover:border-white rounded-full transition-all bg-white/5 backdrop-blur-sm group"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              기업 소개 보기
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
