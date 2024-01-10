import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: '영서의 커리어 소개',
};

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          모두의 일상의 녹아드는 좋은 서비스를 고민하는 프론트엔드 개발자 <br />
          소통과 협업을 통해 함께 발전하는 것을 즐기며, 새로운 도전과 학습에
          열린 마음으로 임하고 있습니다.
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          크립티드 (-Now) <br />
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Vue, Ionic
          <br />
          Git <br />
          VS Code, WebStorm
        </p>
      </section>
    </>
  );
}
