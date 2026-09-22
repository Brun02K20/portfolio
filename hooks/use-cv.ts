"use client"

import { useTranslation } from "react-i18next"

/**
 * Path of the CV matching the language currently on screen.
 *
 * The file name is stored inside each i18n bundle, so switching language swaps
 * the document automatically — no language-code checks anywhere in the UI.
 */
export function useCvUrl() {
  const { t } = useTranslation()
  return t("common.cvUrl")
}
