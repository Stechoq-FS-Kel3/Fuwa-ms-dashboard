<template>
  <div class="drawer-side z-10" style="box-shadow: 0px 6px 12px 0px rgba(41, 41, 41, 0.08)">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="menu p-4 w-64 lg:w-80 min-h-full bg-white text-base-content justify-between">
      <!-- Sidebar content here -->
      <div class="sidebar-top flex flex-col items-start">
        <img class="w-[175px] h-[60px] rounded-2xl mb-6 mt-3" :src="logo" alt="fuwa-ms" />
        <nav class="flex flex-col justify-between w-full h-full text-base">
          <RouterLink
            class="flex items-center p-2 rounded hover:bg-[#F4EFFD]"
            :to="{ name: 'home' }"
            ><img :src="iconHome" alt="icon-nav" class="mr-[16px]" />Home</RouterLink
          >
          <RouterLink
            class="flex items-center p-3 rounded hover:bg-[#F4EFFD]"
            :to="{ name: 'produk' }"
            ><img :src="iconProduk" alt="icon-nav" class="mr-[16px]" />Produk</RouterLink
          >
          <RouterLink
            class="flex items-center p-3 rounded hover:bg-[#F4EFFD]"
            :to="{ name: 'barang-masuk' }"
            ><img :src="iconProduk" alt="icon-nav" class="mr-[16px]" />Barang Masuk</RouterLink
          >
          <RouterLink
            class="flex items-center p-3 rounded hover:bg-[#F4EFFD]"
            :to="{ name: 'barangkeluar' }"
          >
            <img :src="iconBarangKeluar" alt="icon-nav" class="mr-[16px]" />Barang Keluar
          </RouterLink>
        </nav>
      </div>
      <div class="sidebar-bottom mb-4">
        <nav class="flex flex-col justify-between w-full h-full text-base mb-3">
          <button @click="logout" class="flex items-center p-3 rounded hover:bg-[#F4EFFD]">
            <img :src="iconKeluar" alt="icon-nav" class="mr-[16px]" />Keluar
          </button>
        </nav>
        <div class="flex px-2 gap-x-2 items-center">
          <img
            class="w-10 rounded-full border-2"
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1712968793~exp=1712972393~hmac=4b3f6d90b84a838ad4615d21ecf0fb1880f27e6af5b6bfe99f622b8e5f11acf1&w=740"
            alt="profile"
          />
          <div>
            <h2 class="text-lg">{{ username }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo_light.png'
import iconHome from '@/assets/nav-home.svg'
import iconProduk from '@/assets/nav-produk.svg'
import iconLacak from '@/assets/nav-lacak.svg'
import iconBarangKeluar from '@/assets/nav-barang-keluar.svg'
import iconStockOpname from '@/assets/nav-stock-opname.svg'
import iconPengaturan from '@/assets/nav-setting.svg'
import iconKeluar from '@/assets/nav-keluar.svg'
import { logout } from '@/queries/auth'

const publicRoutes = ['/login']
const isPublic = publicRoutes.includes(window.location.pathname)
export default {
  data() {
    return {
      logo,
      iconHome,
      iconProduk,
      iconLacak,
      iconBarangKeluar,
      iconStockOpname,
      iconPengaturan,
      iconKeluar,
      isPublic,
      username: localStorage.getItem('username')
    }
  },
  methods: {
    logout() {
      console.log('Logout method called')
      logout()
    }
  }
}
</script>
