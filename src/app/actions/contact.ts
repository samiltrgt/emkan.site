'use server';

import { sendContactEmail, ContactFormData } from '@/lib/mailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Ad en az 2 karakter olmalıdır'),
  company: z.string().optional(),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().min(5, 'Telefon numarası en az 5 karakter olmalıdır').optional(),
  service: z.string().min(1, 'Hizmet türü seçiniz'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır'),
});

export async function submitContactForm(formData: FormData) {
  try {
    // Environment değişkenlerini kontrol et
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment değişkeni tanımlanmamış');
      return {
        success: false,
        message: 'E-posta servisi yapılandırılmamış. Lütfen site yöneticisi ile iletişime geçin.',
      };
    }

    // Form verilerini al
    const rawData = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    // Debug: Gelen verileri kontrol et
    console.log('Form verileri:', rawData);

    // Veriyi doğrula
    const validatedData = contactSchema.parse(rawData);

    // E-posta gönder
    const result = await sendContactEmail(validatedData);

    if (result.success) {
      return {
        success: true,
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
      };
    } else {
      console.error('E-posta gönderim sonucu:', result);
      return {
        success: false,
        message: `E-posta gönderim hatası: ${result.error}`,
      };
    }
  } catch (error) {
    console.error('Form gönderim hatası:', error);
    
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(err => {
        const field = err.path[0];
        switch (field) {
          case 'name': return 'Ad soyad en az 2 karakter olmalıdır';
          case 'email': return 'Geçerli bir e-posta adresi giriniz';
          case 'phone': return 'Telefon numarası en az 10 karakter olmalıdır';
          case 'service': return 'Hizmet türü seçiniz';
          case 'message': return 'Mesaj en az 10 karakter olmalıdır';
          default: return err.message;
        }
      });
      
      return {
        success: false,
        message: errorMessages.join(', '),
        errors: error.errors,
      };
    }

    return {
      success: false,
      message: 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyiniz.',
    };
  }
}
