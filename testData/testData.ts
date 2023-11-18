import { IMember } from "@/types/Member"
import { ITicket } from "@/types/Ticket"

const tickets: ITicket[] = [
  {
    id: 1,
    title: 'Sửa lỗi máy bán hàng',
    description: '',
    createAt: new Date().getTime() + 1,
    status: 'processing',
    tags: ['#UI007', 'Vận hành', 'Sửa lỗi'],
    customers: [
      { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
    ],
    duration: 40 * 60 * 1000,
    estimateComplete: 50 * 60 * 1000,
    category: 'Vận hành',
    categoryTypes: ['Nạp hàng'],
    files: ['1233.mp4', '1234.mp4'],
    priority: 'Med',
    sla: '10m',
    memberIds: [1],
  },
  {
    id: 2,
    title: 'Sửa lỗi máy bán hàng',
    description: '',
    createAt: new Date().getTime() + 1,
    status: 'not_processed',
    tags: ['#UI007', 'Vận hành', 'Sửa lỗi'],
    customers: [
      { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
    ],
    category: 'Vận hành',
    categoryTypes: ['Nạp hàng'],
    files: ['1233.mp4', '1234.mp4'],
    priority: 'Med',
    sla: '10m',
    memberIds: [1],
  },
  {
    id: 3,
    title: 'Sửa lỗi máy bán hàng',
    description: '',
    createAt: new Date().getTime() + 1,
    status: 'processing',
    customers: [],
    duration: 10 * 60 * 1000,
    estimateComplete: 50 * 60 * 1000,
    category: 'Vận hành',
    categoryTypes: ['Nạp hàng'],
    files: ['1233.mp4', '1234.mp4'],
    priority: 'Med',
    sla: '10m',
    memberIds: [1],
    tags: ['Sửa lỗi'],
  },
  {
    id: 4,
    title: 'Sửa lỗi máy bán hàng',
    description: '',
    createAt: new Date().getTime(),
    status: 'processing',
    customers: [],
    duration: 20 * 60 * 1000,
    estimateComplete: 50 * 60 * 1000,
    category: 'Vận hành',
    categoryTypes: ['Nạp hàng'],
    files: ['1233.mp4', '1234.mp4'],
    priority: 'Med',
    sla: '10m',
    memberIds: [1],
    tags: ['Sửa lỗi'],
  },
  {
    id: 5,
    title: 'Sửa lỗi máy bán hàng',
    description: '',
    createAt: new Date().getTime(),
    status: 'processing',
    customers: [],
    duration: 30 * 60 * 1000,
    estimateComplete: 50 * 60 * 1000,
    category: 'Vận hành',
    categoryTypes: ['Nạp hàng'],
    files: ['1233.mp4', '1234.mp4'],
    priority: 'Med',
    sla: '10m',
    memberIds: [1],
    tags: ['Sửa lỗi'],
  },
  {
    id: 6,
    title: 'Create Wireframe',
    description: '',
    createAt: new Date().getTime(),
    status: 'processed',
    customers: [],
    category: 'Vận hành',
    categoryTypes: ['Nạp hàng'],
    files: ['1233.mp4', '1234.mp4'],
    priority: 'Med',
    sla: '10m',
    memberIds: [1],
    tags: ['Sửa lỗi'],
  },
  {
    id: 7,
    title: 'Research Development',
    description: '',
    createAt: new Date().getTime(),
    status: 'processed',
    customers: [],
    category: 'Vận hành',
    categoryTypes: ['Nạp hàng'],
    files: ['1233.mp4', '1234.mp4'],
    priority: 'Med',
    sla: '10m',
    memberIds: [1],
    tags: ['Sửa lỗi'],
  },
  {
    id: 1234,
    title: 'Cách nạp hàng trên máy',
    description: 'Cách nạp hàng trên máy',
    createAt: new Date().getTime() - 24 * 24 * 60 * 60 * 1000,
    updateAt: new Date().getTime() - 20 * 24 * 60 * 60 * 1000,
    status: 'not_processed',
    customers: [
      { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
    ],
    category: 'Vận hành',
    categoryTypes: ['Nạp hàng'],
    files: ['1233.mp4', '1234.mp4'],
    priority: 'Med',
    sla: 'Sửa lỗi lò xo',
    memberIds: [1],
    tags: ['Sửa lỗi'],
  },
]

const members: IMember[] = [
  {
    id: 1,
    name: 'John Ekeler',
    avatar: '/images/avatar1.svg',
    role: 'Food Dashboard Design',
    online: true,
    currentTask: 'Creating UI and Research',
    todayDuration: 40 * 60 * 1000,
    thisWeekDuration: (8 * 60 + 40) * 60 * 1000,
  },
  {
    id: 2,
    name: 'Rubik Sans',
    avatar: '/images/avatar2.svg',
    role: 'Project Name',
    online: true,
    currentTask: 'Creating UI and Research',
    todayDuration: 40 * 60 * 1000,
    thisWeekDuration: (8 * 60 + 40) * 60 * 1000,
  },
]

const categories = [
  {
    label: 'Vận hành',
    value: 'Vận hành',
    priority: 'Med',
    types: [
      { label: 'Nạp hàng', priority: 'High', },
      { label: 'Cài đặt mạng 4G/Wifi', priority: 'High', },
      { label: 'Cài đặt Phương thức thanh toán', priority: 'High', },
      { label: 'Cài đặt sản phẩm trên máy', priority: 'Med', },
      { label: 'Cài đặt giá bán sản phẩm', priority: 'Med', },
      { label: 'Cài đặt Quảng cáo', priority: 'Med', },
      { label: 'Cài đặt POS', priority: 'Med', },
      { label: 'Cài đặt Nhiệt độ - Bộ lạnh', priority: 'Med', },
      { label: 'Cài đặt Passcode của máy', priority: 'Med', },
      { label: 'Cài đặt âm thanh', priority: 'Med', },
      { label: 'Sử dụng Test tool', priority: 'Low', },
      { label: 'Cài đặt Lò xo', priority: 'Low', },
      { label: 'Vệ sinh máy bán hàng', priority: 'Low', },
      { label: 'Khác', priority: 'Med', },
    ]
  },
  {
    label: 'Sửa lỗi',
    value: 'Sửa lỗi',
    priority: 'High',
    types: [
      { label: 'Lỗi màn hình', priority: 'Urgent' },
      { label: 'Lỗi máy lạnh', priority: 'Urgent' },
      { label: 'Lỗi cảm biến rơi hàng', priority: 'High' },
      { label: 'Lỗi nuốt tiền mặt', priority: 'High' },
      { label: 'Lỗi thanh toán QRcode', priority: 'High' },
      { label: 'Lỗi thanh toán POS', priority: 'High' },
      { label: 'Lỗi không rơi hàng', priority: 'High' },
      { label: 'Lỗi không kết nối mạng', priority: 'High' },
      { label: 'Lỗi lò xo', priority: 'Med' },
      { label: 'Lỗi cửa lấy sản phẩm', priority: 'Med' },
      { label: 'Lỗi khay hàng', priority: 'Med' },
      { label: 'Khác', priority: 'Med' },
    ]
  },
  {
    label: 'Khiếu nại',
    value: 'Khiếu nại',
    priority: 'Urgent',
    types: [
      { label: 'Khiếu nại sản phẩm không đúng yêu cầu', priority: 'Urgent' },
      { label: 'Khiếu nại giao nhầm sản phẩm', priority: 'Urgent' },
      { label: 'Khiếu nại Ticket', priority: 'High' },
      { label: 'Khác', priority: 'High' },
    ]
  }
]

const priorities = [
  { label: 'Khẩn cấp', value: 'Urgent' },
  { label: 'Cao', value: 'High' },
  { label: 'Trung', value: 'Med' },
  { label: 'Thấp', value: 'Low' },
]

const user = {
  id: 1,
  name: 'Yen Hai',
  role: 'BA/Test',
  avatar: ''
}

const status = [
  { label: 'Chưa xử lý', value: 'not_processed' },
  { label: 'Đang xử lý', value: 'processing' },
  { label: 'Đã xử lý', value: 'processed' },
]

const tags = [
  { label: 'Sửa lỗi', value: 'Sửa lỗi' },
  { label: 'Vận hành', value: 'Vận hành' },
]

export {
  tickets as ticketsTest,
  members as membersTest,
  user as userTest,
  categories as categoriesTest,
  priorities as prioritiesTest,
  status as statusTest,
  tags as tagsTest,
}