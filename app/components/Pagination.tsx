'use client'

import { createQueryString } from "@/utils/queryString";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

export default function Pagination({ itemsLength = 1, itemsPerPage = 8 }: { itemsLength?: number, itemsPerPage?: number }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') || ''
  const initialPage = !!parseInt(page) ? parseInt(page) - 1 : 0
  const pageCount = Math.ceil(itemsLength / itemsPerPage);

  const handlePageClick = (event: any) => {
    // const newOffset = (event.selected * itemsPerPage) % itemsLength;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );

    router.push(pathname + '?' + createQueryString(searchParams, "page", event.selected + 1))
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={Math.max(pageCount, 1)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        initialPage={Math.max(initialPage, 0)}
        className="flex items-center gap-4"
        pageLinkClassName="bg-white text-sm font-semibold w-9 h-9 flex justify-center items-center rounded-lg hover:bg-neutral-100 transition cursor-pointer"
        activeLinkClassName="!bg-neutral-800 text-neutral-100 hover:bg-neutral-800 cursor-default"
        previousClassName="bg-white text-sm font-semibold w-9 h-9 flex justify-center items-center rounded-lg hover:bg-neutral-100 transition cursor-pointer"
        nextClassName="bg-white text-sm font-semibold w-9 h-9 flex justify-center items-center rounded-lg hover:bg-neutral-100 transition cursor-pointer"
      />
    </>
  );
}