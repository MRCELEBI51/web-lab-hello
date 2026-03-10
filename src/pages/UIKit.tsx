import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Alert from "../components/Alert";

export default function UIKit() {
  const [alertVisible, setAlertVisible] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          UI Kit
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Tüm component varyantları
        </p>

        {/* BUTTONS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
            Buttons
          </h2>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Renk Varyantları</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Boyut Varyantları</p>
            <div className="flex flex-wrap items-end gap-3">
              <Button size="sm">Küçük</Button>
              <Button size="md">Orta</Button>
              <Button size="lg">Büyük</Button>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Disabled Durum</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </div>
          </div>
        </section>

        {/* INPUTS */}
        <section className="space-y-4 max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
            Inputs
          </h2>
          <Input id="ui-normal" label="Normal Input" placeholder="Bir şey yazın..." />
          <Input
            id="ui-email"
            label="E-posta (Help Text)"
            type="email"
            helpText="Örnek: ad@mail.com"
          />
          <Input
            id="ui-error"
            label="Hatalı Input"
            error="Bu alan zorunludur"
          />
          <Input
            id="ui-disabled"
            label="Devre Dışı"
            disabled
            value="Düzenlenemez"
            onChange={() => {}}
          />
        </section>

        {/* CARDS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
            Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" title="Elevated Card">
              <p>Gölge ile yükseltilmiş kart. Hover'da gölge artar.</p>
              <ul className="flex flex-wrap gap-2 mt-3 list-none p-0">
                {["React", "TypeScript"].map((t) => (
                  <li key={t} className="bg-blue-800 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-xs">{t}</li>
                ))}
              </ul>
            </Card>
            <Card variant="outlined" title="Outlined Card">
              <p>Çerçeveli kart. Sade ve minimal görünüm.</p>
              <ul className="flex flex-wrap gap-2 mt-3 list-none p-0">
                {["CSS", "HTML"].map((t) => (
                  <li key={t} className="bg-blue-800 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-xs">{t}</li>
                ))}
              </ul>
            </Card>
            <Card
              variant="filled"
              title="Filled Card"
              footer={<Button size="sm" variant="primary">Detay</Button>}
            >
              <p>Dolgulu arka plan ile kart.</p>
              <ul className="flex flex-wrap gap-2 mt-3 list-none p-0">
                {["Node.js"].map((t) => (
                  <li key={t} className="bg-blue-800 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-xs">{t}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* ALERTS */}
        <section className="space-y-4 max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
            Alerts
          </h2>
          <Alert variant="info" title="Bilgi">
            Bilgilendirme mesajı burada gösterilir.
          </Alert>
          <Alert variant="success" title="Başarılı">
            İşlem başarıyla tamamlandı!
          </Alert>
          <Alert variant="warning" title="Uyarı">
            Oturum 5 dakika sonra sona erecek.
          </Alert>
          {alertVisible && (
            <Alert
              variant="error"
              title="Hata"
              dismissible
              onDismiss={() => setAlertVisible(false)}
            >
              Bağlantı kurulamadı. Tekrar deneyin.
            </Alert>
          )}
          {!alertVisible && (
            <Button size="sm" variant="secondary" onClick={() => setAlertVisible(true)}>
              Alert'i geri getir
            </Button>
          )}
        </section>
      </div>
    </div>
  );
}
