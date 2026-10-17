'use client';

import { useInvoiceMeta } from './useInvoiceMeta';
import { useLineItems } from './useLineItems';

export type { LineItem } from './useLineItems';

/**
 * Composes `useInvoiceMeta` (top-level invoice fields + validation) and
 * `useLineItems` (item CRUD, totals, reordering) into the unified API
 * existing callers already depend on. See #635.
 *
 * Also exposes multi-currency support (#874): the selected invoice currency,
 * a setter that validates against supported currencies, and a converted XLM
 * preview value derived from the current exchange rate.
 */
export function useInvoiceForm() {
  const meta = useInvoiceMeta();
  const lineItems = useLineItems();

  return {
    ...meta,
    ...lineItems,
  };
}
</｜｜DSML｜｜ parameter>