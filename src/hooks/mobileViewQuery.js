"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function UseMobileToggler() {
  const router = useRouter();
  const pathname = usePathname();
  // console.log("this is the path name", pathname);
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  function toggleQuery(open = "open", param = "false") {
    const params = new URLSearchParams(searchParams);
    params.set(open, param);
    // router.push(`/overview?open=false`, {
    //   scroll: false,
    // });
    router.push(`${pathname}?${params}`, {
      scroll: false,
    });
  }

  const mobileView = searchParams.get("open");
  const id = searchParams.get("id");
  const selectService = searchParams.get("selectService");
  const serviceType = searchParams.get("serviceType");
  const agentType = searchParams.get("agentType");
  const client = searchParams.get("client");
  const registrationType = searchParams.get("registrationType");
  const agencyFormType = searchParams.get("agencyFormType");
  const notifyid = searchParams.get("notifyid");
  const agent = searchParams.get("agent");

  // console.log(mobileView);
  return {
    createQueryString,
    mobileView,
    router,
    pathname,
    notifyid,
    agent,
    client,
    agentType,
    registrationType,
    agencyFormType,
    selectService,
    serviceType,
    toggleQuery,
    id,
  };
}
