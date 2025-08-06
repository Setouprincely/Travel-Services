"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "./button";
import { Globe } from "./icons";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        className={`font-medium ${
          language === "en"
            ? "bg-primary/10 text-primary"
            : "text-gray-600 hover:text-primary"
        }`}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <span className="text-gray-300">|</span>
      <Button
        variant="ghost"
        size="sm"
        className={`font-medium ${
          language === "fr"
            ? "bg-primary/10 text-primary"
            : "text-gray-600 hover:text-primary"
        }`}
        onClick={() => setLanguage("fr")}
      >
        FR
      </Button>
    </div>
  );
}
