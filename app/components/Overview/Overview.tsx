import Link from "next/link"
import { Filter } from "./Filter"
import { Table } from "./Table"
import Pagination from "../Pagination"

export const Overview = () => {
  return (
    <div className="relative w-full sm:rounded-l-3xl bg-[#F9F9F9] px-4 sm:px-8 py-12 space-y-8">
      <div className="">
        <div className="text-3xl mb-3">Ticket</div>
      </div>

      <Link href={"/new-ticket"} className="absolute top-4 right-8 bg-neutral-800 text-sm text-white rounded-lg px-4 py-2">
        <span>+ </span>
        <span>Tạo Ticket</span>
      </Link>

      <Filter />
      <Table />
      <div className="flex justify-center">
        <Pagination itemsLength={15*20} itemsPerPage={15} />
      </div>
    </div>
  )
}