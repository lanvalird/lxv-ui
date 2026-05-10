import { cn } from "@/components/lib/utils";

type SharedProps = React.ComponentProps<"div">;

/**
 * Универсальный компонент заголовка (h1-h6) для использования внутри Markdown.
 * Автоматически применяет единые стили (scroll-margin, отступы, жирность)
 * и специфичные стили для каждого уровня.
 *
 * @param level - Уровень заголовка от 1 до 6.
 * @param children - Содержимое заголовка.
 * @param className - Дополнительные CSS-классы (переопределяют/дополняют).
 *
 */
export function LinearHeading({
  children,
  level,
  className,
}: SharedProps & { level: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const sharedStyle =
    "scroll-m-20 mt-2 mb-4 py-2 tracking-tight font-heading font-semibold";

  function mixStyles(styles: string) {
    return cn(sharedStyle, styles, className);
  }

  if (level === 1) {
    return (
      <h1
        className={mixStyles(
          "my-8 text-center text-4xl font-extrabold text-balance",
        )}
      >
        {children}
      </h1>
    );
  }
  if (level === 2) {
    return (
      <h2 className={mixStyles("border-b text-3xl first:mt-0")}>{children}</h2>
    );
  }
  if (level === 3) {
    return <h3 className={mixStyles("border-b text-2xl")}>{children}</h3>;
  }

  const forOptionallyHeadings = "mt-4 text-xl";
  if (level === 4) {
    return <h4 className={mixStyles(forOptionallyHeadings)}>{children}</h4>;
  }
  if (level === 5) {
    return (
      <h5 className={mixStyles(`${forOptionallyHeadings} font-medium`)}>
        {children}
      </h5>
    );
  }
  return (
    <h6 className={mixStyles(`${forOptionallyHeadings} font-medium italic`)}>
      {children}
    </h6>
  );
}

/**
 * Компонент параграфа для текста в Markdown.
 * Добавляет верхний отступ (`mt-6`) для всех параграфов, кроме первого.
 *
 * @param children - Текстовое содержимое.
 *
 * @example
 * <LinearText>
 *   Это обычный абзац текста. Следующий за ним получит отступ сверху.
 * </LinearText>
 */
export function LinearText({ children }: SharedProps) {
  return <p className="leading-7 not-first:mt-6">{children}</p>;
}

/**
 * Компонент списка — маркированного (figured) или нумерованного (numeric).
 * Использует цвет `primary` для маркеров/номеров.
 *
 * @param variant - Тип списка: "numeric" (ol, десятичные) или "figured" (ul, маркеры).
 * @param children - Элементы списка (`<li>…</li>`).
 *
 * @example
 * // Маркированный список
 * <LinearList variant="figured">
 *   <li>Пункт 1</li>
 *   <li>Пункт 2</li>
 * </LinearList>
 *
 * @example
 * // Нумерованный список
 * <LinearList variant="numeric">
 *   <li>Первый шаг</li>
 *   <li>Второй шаг</li>
 * </LinearList>
 */
export function LinearList({
  children,
  variant,
}: SharedProps & { variant: "numeric" | "figured" }) {
  if (variant === "numeric") {
    return (
      <ol className="ml-6 list-decimal [&>li]:mt-2 marker:text-primary">
        {children}
      </ol>
    );
  } else {
    return (
      <ul className="ml-6 list-disc [&>li]:mt-2 marker:text-primary">
        {children}
      </ul>
    );
  }
}
