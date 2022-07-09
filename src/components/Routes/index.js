import BangDieuKhien from "~/components/pages/BangDieuKhien";
import BanQuyen from "~/components/pages/BanQuyen";
import PhuKien from "~/components/pages/PhuKien";

const publicRoutes = [
    {path: '/', element: BangDieuKhien},
    {path: '/banquyen', element: BanQuyen},
    {path: '/phukien', element: PhuKien}
]

const privateRoutes = []

export { publicRoutes, privateRoutes}