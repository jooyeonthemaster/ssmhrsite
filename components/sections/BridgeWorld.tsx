"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Globe2, ArrowRight, Users2, Building2, ExternalLink, Maximize2 } from "lucide-react";

export function BridgeWorld() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="platform" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-12">
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 sticky top-24"
          >
            <div className="flex items-center gap-2 mb-6">
              <Globe2 className="w-6 h-6 text-brand-gold animate-pulse" />
              <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Global Platform</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Bridge World<br />
              <span className="text-blue-200">글로벌 인재 매칭 플랫폼</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              선한이웃이 운영하는 <strong>Bridge World</strong>는 외국인 구직자와 국내 기업을 
              가장 확실하고 안전하게 연결하는 글로벌 구인구직 플랫폼입니다.
              <br/><br/>
              실시간으로 업데이트되는 채용 정보를 확인해보세요.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-2 border border-white/10">
                <Users2 className="w-5 h-5 text-blue-300" />
                <span className="text-white text-sm">검증된 글로벌 인재풀</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-2 border border-white/10">
                <Building2 className="w-5 h-5 text-blue-300" />
                <span className="text-white text-sm">기업 맞춤형 매칭</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-gold hover:bg-amber-600 text-white border-none px-8 h-14 text-lg gap-2 shadow-xl shadow-orange-900/20 flex-1 sm:flex-none"
                  onClick={() => window.open("https://linkbridgeworld.com/", "_blank")}
                >
                  새 창에서 열기
                  <ExternalLink className="w-5 h-5" />
                </Button>
            </div>
          </motion.div>

          {/* Visual Side - Live Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-7/12 w-full"
          >
            <div className="relative w-full rounded-3xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden group">
               {/* Browser Header */}
               <div className="h-12 bg-slate-800/50 border-b border-white/5 flex items-center px-4 gap-3 backdrop-blur-sm absolute top-0 left-0 right-0 z-20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="ml-4 flex-1 h-7 bg-black/20 rounded-md flex items-center px-3 text-xs text-slate-400 font-mono truncate">
                    https://linkbridgeworld.com
                  </div>
               </div>

               {/* Iframe Container */}
               <div className="relative h-[600px] lg:h-[700px] w-full pt-12 bg-white">
                 {isLoading && (
                   <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-400 z-10">
                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
                   </div>
                 )}
                 <iframe 
                   src="https://linkbridgeworld.com/"
                   className="w-full h-full border-0"
                   title="Bridge World Preview"
                   loading="lazy"
                   onLoad={() => setIsLoading(false)}
                   sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                 />
                 
                 {/* Overlay (Optional: prevents scroll trapping if needed, removed for full interactivity) */}
                 {/* <div className="absolute inset-0 bg-transparent pointer-events-none" /> */}
               </div>
            </div>
            <p className="text-center text-slate-500 text-xs mt-4">
              * 일부 브라우저 보안 설정에 따라 미리보기가 제한될 수 있습니다.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
