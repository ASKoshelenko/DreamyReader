# TTS Reader 📚🔊

TTS Reader - это современное веб-приложение для чтения документов с возможностью преобразования текста в речь, интегрированное с Azure OpenAI Service. Приложение является частью портфолио DevOpsDive.

## Основные возможности

- 📖 **Поддержка форматов**: EPUB, PDF, TXT, MD, DOCX
- 🎯 **Azure OpenAI Integration**: Использование Azure OpenAI Service для TTS
- 💾 **Локальное хранение**: IndexedDB для хранения документов
- 📱 **Мобильная поддержка**: Адаптивный дизайн и PWA
- 🌍 **Мультиязычность**: Поддержка нескольких языков через i18n
- 🎨 **Современный UI**: Интеграция с дизайном портфолио DevOpsDive

## Технический стек

- **Frontend**: Next.js, React, TypeScript
- **UI**: Bootstrap, React Bootstrap
- **TTS**: Azure OpenAI Service
- **Документы**: react-pdf, react-reader
- **Локализация**: i18next
- **Стилизация**: Tailwind CSS

## Установка и запуск

### Предварительные требования

- Node.js & npm
- FFmpeg (для создания аудиокниг)
- LibreOffice (для работы с DOCX)

### Шаги установки

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/your-username/tts-reader.git
   cd tts-reader
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Настройте переменные окружения:
   ```bash
   cp template.env .env
   # Отредактируйте .env с вашими настройками Azure OpenAI
   ```

4. Запустите сервер разработки:
   ```bash
   npm run dev
   ```

## Docker развертывание

```bash
docker run --name tts-reader \
  -p 3003:3003 \
  -v tts_docstore:/app/docstore \
  -e AZURE_OPENAI_ENDPOINT=your-endpoint \
  -e AZURE_OPENAI_API_KEY=your-key \
  your-registry/tts-reader:latest
```

## Лицензия

MIT License
