"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation"

export default function ModelDetail({ _params }) {
  console.log(_params, "_params")

  const router = useRouter();
  const paramas = useParams();
  const searchParams = useSearchParams()

  const search = searchParams.get("item")

  console.log(search)
  return (
    <>
      <div className="my-[30px] flex justify-center">
        <div className="w-[95%] h-[75vh] bg-black">

        </div>
      </div>

    </>
  )
}