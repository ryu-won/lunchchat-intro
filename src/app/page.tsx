"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroPage() {
  // 순환 버튼 텍스트: 변경 불가 readonly 튜플로 선언
  const buttonTexts = ["런치챗 보내기", "수락 대기중", "채팅 보내기"] as const;

  // 현재 인덱스는 number로 한정
  const [buttonTextIndex, setButtonTextIndex] = useState<number>(0);

  useEffect((): (() => void) => {
    const interval = setInterval(() => {
      setButtonTextIndex((prev) => (prev + 1) % buttonTexts.length);
    }, 700);
    return () => clearInterval(interval);
  }, [buttonTexts.length]);

  const handleGoToMain = (): void => {
    window.open("https://lunchchat.site/", "_blank");
  };

  return (
    <div className="relative min-h-screen max-w-[440px] mx-auto bg-white">
      {/* 메인 이미지 섹션 */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* 배경 이미지 (1.svg) */}
        <div className="relative mb-8 w-full">
          <Image
            src="/1.svg"
            alt="Background"
            width={440}
            height={330}
            className="w-full h-auto max-w-[440px]"
            priority
          />

          {/* 로고 (logo.svg) */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ marginTop: "60px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/logo.svg"
              alt="LunchChat Logo"
              width={300}
              height={100}
              className="w-auto h-20 md:h-24"
              priority
            />
          </motion.div>

          {/* 텍스트 (text01.svg) */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ marginTop: "140px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/text01.svg"
              alt="Description Text"
              width={500}
              height={80}
              className="w-auto h-16 md:h-20"
              priority
            />
          </motion.div>

          {/* 스마트폰 (smartPhone.svg) */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ marginTop: "250px" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/smartPhone.svg"
              alt="Smartphone Interface"
              width={400}
              height={300}
              className="w-auto max-w-[380px]"
              priority
            />
          </motion.div>
        </div>

        {/* 페르소나 섹션 */}
        <motion.div
          className="w-full"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3, delayChildren: 0.3 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {/* Persona 1 */}
          <motion.div
            className="flex justify-end"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/persona1.svg"
              alt="Persona 1"
              width={300}
              height={200}
              className="w-auto max-w-[280px]"
              priority
            />
          </motion.div>

          {/* Persona 2 */}
          <motion.div
            className="flex justify-start"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/persona2.svg"
              alt="Persona 2"
              width={300}
              height={200}
              className="w-auto max-w-[280px]"
              priority
            />
          </motion.div>

          {/* Persona 3 */}
          <motion.div
            className="flex justify-end"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/persona3.svg"
              alt="Persona 3"
              width={300}
              height={200}
              className="w-auto max-w-[280px]"
              priority
            />
          </motion.div>

          {/* Text02 */}
          <motion.div
            className="flex justify-center"
            style={{ marginTop: "120px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/text02.svg"
              alt="Description Text 2"
              width={500}
              height={100}
              className="w-auto max-w-[400px]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 2.svg 섹션 */}
      <motion.div
        className="relative"
        style={{ marginTop: "150px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative">
          <div className="flex justify-center">
            <Image
              src="/2.svg"
              alt="Image 2"
              width={400}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Text03 */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ marginTop: "91px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/text03.svg"
              alt="Description Text 3"
              width={500}
              height={100}
              className="w-auto max-w-[400px]"
              priority
            />
          </motion.div>

          {/* Text04 */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ marginTop: "127px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/text04.svg"
              alt="Description Text 4"
              width={500}
              height={100}
              className="w-auto max-w-[400px]"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 3.svg 섹션 */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative">
          <div className="flex justify-center">
            <Image
              src="/3.svg"
              alt="Image 3"
              width={400}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>

          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ marginTop: "35px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/text05.svg"
              alt="Description Text 5"
              width={500}
              height={100}
              className="w-auto max-w-[400px]"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 4.svg 섹션 */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative">
          <div className="flex justify-center">
            <Image
              src="/4.svg"
              alt="Image 4"
              width={400}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>

          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ marginTop: "38px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/text06.svg"
              alt="Description Text 6"
              width={500}
              height={100}
              className="w-auto max-w-[400px]"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/text07.svg"
              alt="Description Text 7"
              width={500}
              height={100}
              className="w-auto max-w-[400px]"
              priority
            />
          </motion.div>

          {/* 런치챗 보내기 버튼 */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-75 md:bottom-82"
            style={{
              width: "143.65px",
              height: "22.016px",
              aspectRatio: "335/48",
              borderRadius: "5px",
              backgroundColor: buttonTextIndex === 1 ? "#D4D4D4" : "#F56156",
              color: "white",
              fontSize: "7px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {buttonTexts[buttonTextIndex]}
          </motion.div>
        </div>
      </motion.div>

      {/* 5.svg 섹션 */}
      <motion.div
        className="relative"
        style={{ marginTop: "43px" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      >
        <div className="flex justify-center px-33">
          <Image
            src="/5.svg"
            alt="Image 5"
            width={400}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
      </motion.div>

      {/* 6.svg 섹션 */}
      <motion.div
        className="relative"
        style={{ marginTop: "45px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative">
          <div className="flex justify-center">
            <Image
              src="/6.svg"
              alt="Image 6"
              width={400}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>

          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ marginTop: "34px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/text08.svg"
              alt="Description Text 8"
              width={500}
              height={100}
              className="w-auto max-w-[400px]"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute top-0 left-0"
            style={{ marginTop: "100px", marginLeft: "30px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/ending1.svg"
              alt="Ending 1"
              width={200}
              height={150}
              className="w-auto max-w-[227px]"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute top-0 right-0"
            style={{ marginTop: "180px", marginRight: "30px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/ending2.svg"
              alt="Ending 2"
              width={200}
              height={150}
              className="w-auto max-w-[227px]"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute top-0 left-0"
            style={{ marginTop: "260px", marginLeft: "30px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/ending3.svg"
              alt="Ending 3"
              width={200}
              height={150}
              className="w-auto max-w-[227px]"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Footer 섹션 */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="flex justify-center w-full">
          <Image
            src="/footer.svg"
            alt="Footer"
            width={400}
            height={200}
            className="w-full h-auto max-w-[400px]"
            priority
          />
        </div>
        <div className="h-32" />
      </motion.div>

      {/* Fixed Floating Button */}
      <div className="fixed bottom-4 md:bottom-6 left-0 right-0 z-50">
        <div className="max-w-[440px] mx-auto px-5">
          <motion.button
            onClick={handleGoToMain}
            className="w-full flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/goLunchchat.svg"
              alt="Go to LunchChat"
              width={200}
              height={80}
              className="w-auto h-16 md:h-20"
              priority
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
