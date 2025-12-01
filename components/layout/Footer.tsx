import React from "react";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-20 border-t border-white/10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
               <span className="font-black text-2xl tracking-tighter">SSMHR</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              기업의 가치를 높이는 선한이웃.<br />
              우리는 신뢰와 전문성을 바탕으로 최상의 HR 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">회사소개</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">주요업무</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Bridge World</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">오시는길</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex flex-col">
                  <span className="text-xs text-slate-500 mb-1">대표전화</span>
                  <span className="text-white font-medium">031-217-5997</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs text-slate-500 mb-1">이메일</span>
                  <span className="text-white font-medium">ssmhr@ssmhr.co.kr</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <span>대표자: 안상수</span>
            <span>사업자등록번호: 준비중</span>
            <span>주소: 경기도 수원시 영통구 도청로 95 유니코어 알파동 B1 102호</span>
          </div>
          <div className="flex items-center gap-6">
            <span>© 2025 SSMHR. All rights reserved.</span>
            <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
              Admin <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
