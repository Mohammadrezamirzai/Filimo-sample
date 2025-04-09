import Accordianval from "./Accordianval.jsx";

export default function Accordian() {
  return (
    <section className=" bg-[#1817178a] flex flex-col items-center py-16 space-y-2">
      <h3 className="text-white text-3xl font-bold">سوالات متدوال</h3>
      <p className="text-gray-300 py-1 mb-4">
        سوال شایع دیگر کاربران شاید برای شما نیز پیشامده باشد

      </p>

      <Accordianval
        title={"آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟"}
        description={
          "بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر، هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید"
        }
      />
      <Accordianval
        title={"آیا فیلیمو برای خارج از ایران در دسترس است؟"}
        description={
          "خیر. درحال حاضر تماشای فیلیمو فقط در داخل کشور فعال است و امکان تماشا برای افراد خارج از کشور فعال نیست"
        }
        linkText={
          "دانلود از طریق سایت و دانلود از طریق اپلیکیشن را تماشا کنید."
        }
      />
      <Accordianval
        title={"آیا برای تماشای فیلم‌های اکران آنلاین، باید اشتراک بخرم؟"}
        description={
          "تماشای فیلم‌های اکران آنلاین مانند تماشا در سینمای واقعی است؛ یعنی برای دیدن هر فیلم که در اکران آنلاین است باید بلیت تهیه کنید و به جای رفتن به سالن سینما، 8 ساعت فرصت دارید که آن فیلم را از داخل خانه تماشا کنید."
        }
      />
      <Accordianval
        title={"از کجا می‌توانم نرم‌افزار اندروید یا iOS فیلیمو را دانلود کنم؟"}
        description={
          "برای نصب نرم‌افزار اندرویدی فیلیمو می‌توانید ازطریق کافه بازار یا مایکت اقدام به دانلود کنید. یا می‌توانید روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید"
        }
        linkText={
          "(دانلود مستقیم نرم‌افزار اندروید) برای دانلود نرم‌افزار iOS فیلیمو نیز کافیست روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید. (دانلود مستقیم نرم‌افزار iOS)"
        }
      />
    </section>
  );
}
