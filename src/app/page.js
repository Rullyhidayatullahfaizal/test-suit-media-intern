"use client"
import NavbarPage from "./components/navbar";
import Banner from "./components/landingPage";
import PostList from "./components/postlist";

export default function Home() {

  const posts = [
    {
      id: 1,
      title: 'Kenali Tingkatan Influencers berdasarkan Jumlah Followers',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/tes.jpg',
    },
    {
      id: 2,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/download (1).png',
    },
    {
      id: 3,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/tes.jpg',
    },
    {
      id: 4,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/download (1).png',
    },
    {
      id: 5,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/tes.jpg',
    },
    {
      id: 6,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/download (1).png',
    },
    {
      id: 7,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/tes.jpg',
    },
    {
      id: 8,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/download (1).png',
    },
    {
      id: 9,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/tes.jpg',
    },
    {
      id: 10,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/download (1).png',
    },
    {
      id: 11,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/tes.jpg',
    },
    {
      id: 12,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/download (1).png',
    },
    {
      id: 13,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/tes.jpg',
    },
    {
      id: 14,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/download (1).png',
    },
    {
      id: 15,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/tes.jpg',
    },
    {
      id: 16,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/download (1).png',
    },
    {
      id: 17,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/tes.jpg',
    },
    {
      id: 18,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/download (1).png',
    },
    {
      id: 19,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/tes.jpg',
    },
    {
      id: 20,
      title: 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer',
      date: '5 SEPTEMBER 2022',
      thumbnail: '/download (1).png',
    },
    
    // Tambahkan lebih banyak data contoh sesuai kebutuhan
  ];

  return (
    <div className="">
      <NavbarPage/>
      <main className="flex flex-col items-center justify-center  min-h-screen">
      <Banner />
      {/* Konten halaman lainnya */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold">More About Us</h2>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vehicula eros nec dui efficitur, et aliquam nunc interdum.
        </p>
      </section>
    </main>
    <div className="container mx-auto p-4">
      <PostList posts={posts} />
    </div>
    </div>
  );
}
