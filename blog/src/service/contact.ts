import { EamilData } from '@/service/email';

export async function sendContactEmail(eamil: EamilData) {
  //우리 API Route에 이메일 전송을 위한 요청을 보냄(fetch)
  const response = await fetch(`/api/contact`, {
    method: 'POST',
    body: JSON.stringify(eamil),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함😂');
  }
  return data;
}
