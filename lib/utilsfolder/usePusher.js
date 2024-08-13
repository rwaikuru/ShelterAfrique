"use client";
import { useEffect, useMemo, useState } from "react";
import Pusher from "pusher-js";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

const usePusher = () => {
  const [notification, setNotification] = useState("");
  const { data: session, status } = useSession();
  const isAdmin = useMemo(() => {
    let isAdmin = session?.user?.account?.isAdmin || false;
    return isAdmin;
  }, [session?.user?.account?.isAdmin]);

  useEffect(() => {
    if (status !== "loading" && isAdmin) {
      const pusher = new Pusher(`${process.env.NEXT_PUBLIC_PUSHER_APP_KEY}`, {
        cluster: `${process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER}`,
        encrypted: true,
        authEndpoint: "/api/v1/pusher/auth",
        // userAuthentication: {
        //   endpoint: '/api/v1/pusher/auth'
        // }
      });
      const channel = pusher.subscribe(
        `private-${process.env.NEXT_PUBLIC_PUSHER_APP_CHANNEL}`
      );
      channel.bind(
        `${process.env.NEXT_PUBLIC_PUSHER_APP_EVENT}`,
        function (data) {
          setNotification(data);
          toast.info(data?.message, {
            autoClose: 20000,
          });
        }
      );

      return () => {
        pusher.unsubscribe(
          `private-${process.env.NEXT_PUBLIC_PUSHER_APP_CHANNEL}`
        );
      };
    }
  }, [isAdmin, status]);
  return {};
};

export default usePusher;
