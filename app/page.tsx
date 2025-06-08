export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">恭喜你！🎉</h1>
        <p className="text-xl text-gray-600 text-center max-w-xl">
          你成功開啟了自己的第一個網站！
          <br />
          就讓我們用這份檔案開始 Vibe Coding 之旅吧！
          <br />
          偷偷告訴你，如果你想看首頁的原始碼，可以去看看這個檔案: <br />
          <code>@/app/page.tsx</code>
        </p>
      </main>
    </>
  );
}
