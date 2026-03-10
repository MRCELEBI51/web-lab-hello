import React from "react";

type CardVariant = "elevated" | "outlined" | "filled";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  variant?: CardVariant;
  tags?: string[];
}

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = "elevated",
  tags,
}: CardProps) {
  const variants: Record<CardVariant, string> = {
    elevated:
      "bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-1",
    outlined:
      "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:-translate-y-1",
    filled: "bg-gray-100 dark:bg-gray-800 hover:-translate-y-1",
  };

  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 ${variants[variant]}`}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt || ""}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>
        )}
        <div className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          {children}
        </div>
        {tags && tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-3" role="list">
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs dark:bg-blue-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
      {footer && (
        <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
}
