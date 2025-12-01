"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left: Visual / Map */}
          <div className="lg:col-span-5 h-full min-h-[400px] lg:min-h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.123456789!2d127.053215!3d37.290354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzcsIDEyNw!5e0!3m2!1sko!2skr!4v1600000000000!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
                allowFullScreen 
                loading="lazy" 
                className="absolute inset-0 w-full h-full"
             />
             <div className="absolute inset-0 pointer-events-none border-[6px] border-white/10 rounded-3xl"></div>
             
             <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-2xl shadow-xl">
               <h4 className="font-bold text-brand-navy text-lg flex items-center gap-2">
                 <MapPin className="w-5 h-5 text-brand-gold" /> 수원 본사
               </h4>
               <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                 경기도 수원시 영통구 도청로 95<br />유니코어 알파동 지하1층 102호 컴샵
               </p>
             </div>
          </div>

          {/* Right: Info & Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              함께 그리는 미래,<br />
              <span className="text-brand-blue">선한이웃</span>이 시작합니다.
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              HR 관련 고민이 있으시다면 언제든 연락주세요.<br />
              전문가가 직접 친절하게 상담해 드립니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                 <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors text-brand-blue">
                   <Phone className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 mb-1">전화 / 팩스</h3>
                 <p className="text-2xl font-bold text-brand-navy tracking-tight">031-217-5997</p>
                 <span className="text-sm text-slate-500 mt-1 block">평일 09:00 - 18:00</span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                 <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors text-brand-blue">
                   <Mail className="w-6 h-6" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 mb-1">이메일 문의</h3>
                 <p className="text-lg font-medium text-slate-700">ssmhr@ssmhr.co.kr</p>
                 <span className="text-sm text-slate-500 mt-1 block">24시간 접수 가능</span>
              </div>
            </div>

            <div className="bg-brand-navy rounded-2xl p-8 text-white relative overflow-hidden">
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">바로 상담이 필요하신가요?</h3>
                    <p className="text-slate-300 text-sm">전문 컨설턴트가 귀사의 상황에 맞는 최적의 솔루션을 제안합니다.</p>
                  </div>
                  <Button className="bg-brand-gold hover:bg-amber-600 text-white px-8 py-6 rounded-xl font-bold text-lg shrink-0 w-full md:w-auto">
                    무료 상담 신청하기
                  </Button>
               </div>
               
               {/* Decorative BG */}
               <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
