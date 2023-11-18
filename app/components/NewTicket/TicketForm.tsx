'use client'

import { categoriesTest, prioritiesTest, userTest } from "@/testData/testData"
import { Field, Formik } from 'formik'
import Image from "next/image"
import * as Yup from "yup"
import FileInput from "../Input/FileInput"
import ItemSelect from "../Input/ItemSelect"
import MemberInput from "../Input/MemberInput"
import TagInput from "../Input/TagInput"
import TextInput from "../Input/TextInput"
import { ITicket } from "@/types/Ticket"

interface MyFormValues {
  title: string;
  description: string;
  category: string | null;
  categoryTypes: string[];
  files: any[];
  priority: 'Low' | 'Med' | 'High' | 'Urgent' | null;
  sla: string;
  memberIds: Array<string | number>;
  tags: string[];
  oldFiles: any[];
}

const TicketSchema = Yup.object().shape({
  title: Yup.string()
    .required('Required'),
  description: Yup.string()
    .required('Required'),
  category: Yup.string()
    .required('Required'),
  categoryTypes: Yup.array()
    .required('Required'),
  files: Yup.array()
    .required('Required'),
  priority: Yup.string()
    .required('Required'),
  sla: Yup.string()
    .required('Required'),
  // memberIds: Yup.array()
  //   .required('Required'),
  // tags: Yup.array()
  //   .required('Required'),
});

export const TicketForm = ({ data }: { data?: ITicket }) => {
  const initialValues: MyFormValues = {
    title: '',
    description: '',
    category: null,
    categoryTypes: [],
    priority: null,
    sla: '',
    memberIds: [userTest.id],
    tags: ['Sửa lỗi'],
    ...data,
    files: [],
    oldFiles: data?.files || [],
  };

  const Label = ({ label, className }: { label: string, className?: string }) => {
    return (
      <p className={`w-36 font-medium tracking-[0.30px] leading-[23px] flex-shrink-0 ${className}`}>
        <span className="">{label} </span>
        <span className="text-absolute-red">*</span>
      </p>
    )
  }

  const CheckBox = ({ label, className }: { label: string, className?: string }) => {
    return (
      <div className={`flex items-center ${className}`}>
        <Field type="checkbox" name="categoryTypes" value={label} className={className} />
        <p className="ml-2 text-xs">{label}</p>
      </div>
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TicketSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
        /* and other goodies */
      }) => (
        <form>
          <div className="mx-4 md:mx-20 my-8 bg-[#f8f8f8] rounded-lg shadow-[0px_30px_60px_#1f375526]">
            <div className="px-4 md:px-12 py-8 space-y-4">
              <div className="flex gap-4 flex-col lg:gap-0 lg:flex-row items-start">
                <div className="sm:flex items-center lg:w-1/2 lg:pr-8">
                  <Label label="Danh mục hỗ trợ" />
                  <ItemSelect
                    options={categoriesTest}
                    value={categoriesTest.find(c => c.value == values.category)}
                    onChange={(value) => {
                      setFieldValue('category', value?.value)
                      setFieldValue('priority', value?.priority)
                    }}
                    placeholder="Chọn danh mục"
                    required
                  />
                </div>

                <div className="lg:w-1/2 sm:flex items-start pt-2">
                  <Label label="Loại danh mục" />
                  <div className="md:grid grid-cols-2 gap-2 gap-x-4">
                    {categoriesTest.find(c => c.value == values.category)?.types?.map((item, index) => (
                      <CheckBox key={index} label={item.label} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 sm:flex items-center lg:w-1/2 lg:pr-8">
                <Label label="Tiêu đề" />
                <TextInput id="title_input" placeholder="Nhập tiêu đề" value={values.title} onChange={(value) => setFieldValue("title", value)} required />
              </div>

              <div className="flex-1 sm:flex items-start">
                <Label label="Mô tả" className="pt-2" />
                <TextInput id="description_input" placeholder="Nhập mô tả" value={values.description} onChange={(value) => setFieldValue("description", value)} multiline required />
              </div>

              <div className="flex-1 sm:flex items-start">
                <Label label="Tệp mô tả" className="pt-2" />
                <FileInput files={values.files} setFiles={(value) => setFieldValue('files', value)} />
              </div>

              <div className="flex-1 sm:flex items-center lg:w-1/2 lg:pr-8">
                <Label label="Độ ưu tiên" />
                <ItemSelect options={prioritiesTest} value={prioritiesTest.find(p => p.value == values.priority)} onChange={(value) => setFieldValue('priority', value)} placeholder="Chọn" required />
              </div>

              <div className="px-4 md:px-12 py-8 bg-white rounded-lg border border-solid border-[#7784ee] shadow-[0px_5px_15px_#7784ee4c]">
                <div className="flex-1 sm:flex items-start lg:w-1/2 mb-16">
                  <Label label="SLA" className="pt-2" />
                  <TextInput id="sla_input" placeholder="" value={values.sla} onChange={(value) => setFieldValue('sla', value)} required />
                </div>

                <div className="flex-1 flex items-center gap-8 mb-4">
                  <Image alt="Add member" src="/icons/ic_plus_man.svg" width={36} height={36} />
                  {/* Todo: handle fetch members */}
                  <MemberInput members={[userTest]} setMembers={(value) => setFieldValue("memberIds", value.map(v => v.id))} />
                </div>

                <div className="flex-1 flex items-center gap-8">
                  <Image alt="Add tag" src="/icons/ic_tag.svg" width={36} height={36} />
                  <TagInput tags={values.tags} setTags={(value) => setFieldValue("tags", value)} />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-6 md:mx-28 sm:mt-12 sm:mb-4 flex flex-col sm:flex-row gap-4">
            <button type="button" onClick={() => handleSubmit()} className="bg-[#7784ee] rounded-lg px-4 py-1">
              <span className="font-medium text-white text-[14px] tracking-[0.30px] leading-[24px] whitespace-nowrap">
                {data ? 'Update' : 'Create'}
              </span>
            </button>
            <button type="button" onClick={() => handleSubmit()} className="bg-[#7784ee] rounded-[8px] px-4 py-1">
              <span className="font-medium text-white text-[14px] tracking-[0.30px] leading-[24px] whitespace-nowrap">
                {data ? 'Update and continue' : 'Create and continue'}
              </span>
            </button>
            {data && (
              <button type="button" onClick={() => handleSubmit()} className="bg-white border border-black rounded-[8px] px-4 py-1">
                <span className="font-medium text-black text-[14px] tracking-[0.30px] leading-[24px] whitespace-nowrap">
                  Reject
                </span>
              </button>
            )}
          </div>
        </form>
      )}
    </Formik>
  )
}