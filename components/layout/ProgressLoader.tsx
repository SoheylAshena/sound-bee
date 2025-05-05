"use client";

import { useEffect } from "react";
import NProgress from "nprogress";
import { usePathname } from "next/navigation";

export default function ProgressLoader() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
  }, []);

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname]);

  return null;
}
