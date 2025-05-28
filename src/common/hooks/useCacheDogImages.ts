import { useEffect } from 'react'

/**
 * Хук для кэширования изображений собак в Service Worker
 * @param imageUrls - Строка URL или массив URL изображений
 * @param cacheName - Название кэша (по умолчанию 'dog-images-cache')
 */

export const useCacheDogImages = (imageUrls: string | string[] | undefined, cacheName: string = 'dog-images-cache') => {
  useEffect(() => {
    if (!imageUrls) return

    const normalizeUrls = (urls: string | string[]): string[] => {
      const rawUrls = Array.isArray(urls) ? urls : [urls]

      return rawUrls.map((url) => {
        // Если URL уже полный (начинается с http) - возвращаем как есть
        if (url.startsWith('http')) {
          return url
        }

        // Для относительных путей (/breed/...)
        if (url.startsWith('/')) {
          // Удаляем лишние слеши и корректируем путь
          const cleanPath = url.replace(/^\/+/, '').replace('breed/', 'breeds/')
          return `https://images.dog.ceo/${cleanPath}`
        }

        // Для случаев, когда приходит только часть пути (редко)
        return `https://images.dog.ceo/breeds/${url.replace(/^\/+/, '')}`
      })
    }

    const cacheImages = async () => {
      try {
        const urls = normalizeUrls(imageUrls)
        const cache = await caches.open(cacheName)
        await Promise.all(
          urls.map((url) => cache.add(url).catch((error) => console.error(`Ошибка кэширования ${url}:`, error)))
        )
      } catch (error) {
        console.error('Ошибка при работе с кэшем:', error)
      }
    }

    cacheImages()
  }, [imageUrls, cacheName])
}
