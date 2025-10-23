import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // API key kontrolü
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment değişkeni tanımlanmamış');
      return { success: false, error: 'E-posta servisi yapılandırılmamış' };
    }

    // Debug: API key kontrolü
    console.log('API Key var mı:', !!process.env.RESEND_API_KEY);
    console.log('FROM:', process.env.EMAIL_FROM || 'noreply@emkanglobal.com');
    console.log('TO:', process.env.EMAIL_TO || 'info@emkanglobal.com');

    const { data: emailData, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: [process.env.EMAIL_TO || 'info@emkanglobal.com'],
      subject: `Yeni İletişim Formu - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #0A1E3F, #2ED3B7); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">
              🚢 Yeni İletişim Formu
            </h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #0A1E3F; margin-top: 0; border-bottom: 2px solid #2ED3B7; padding-bottom: 10px;">
              Müşteri Bilgileri
            </h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #0A1E3F;">👤 Ad Soyad:</strong>
              <p style="margin: 5px 0; color: #374151;">${data.name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #0A1E3F;">🏢 Şirket:</strong>
              <p style="margin: 5px 0; color: #374151;">${data.company || 'Belirtilmemiş'}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #0A1E3F;">📧 E-posta:</strong>
              <p style="margin: 5px 0; color: #374151;">
                <a href="mailto:${data.email}" style="color: #2ED3B7; text-decoration: none;">${data.email}</a>
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #0A1E3F;">📞 Telefon:</strong>
              <p style="margin: 5px 0; color: #374151;">
                ${data.phone ? `<a href="tel:${data.phone}" style="color: #2ED3B7; text-decoration: none;">${data.phone}</a>` : 'Belirtilmemiş'}
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #0A1E3F;">🔧 Hizmet Türü:</strong>
              <p style="margin: 5px 0; color: #374151;">${data.service}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #0A1E3F;">💬 Mesaj:</strong>
              <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #2ED3B7; margin-top: 10px;">
                <p style="margin: 0; color: #374151; line-height: 1.6;">${data.message}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
            <p>Bu e-posta Emkan Global web sitesinden gönderilmiştir.</p>
            <p>📅 Tarih: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('E-posta gönderim hatası:', error);
      console.error('Hata detayı:', JSON.stringify(error, null, 2));
      return { success: false, error: `Resend hatası: ${error.message}` };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error('E-posta gönderim hatası:', error);
    return { success: false, error: 'E-posta gönderilemedi' };
  }
}
