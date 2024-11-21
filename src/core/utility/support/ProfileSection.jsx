import adminImg from '../../../assets/images/admin.png'

const ProfileSection = () => {
  return (
    <div className="bg-VioletBlue w-full">
      <div className="flex items-center gap-3 py-4 px-4">
        <img src={adminImg} className='h-10 w-10 rounded-full' alt="prof"/>
          <div >
            <h1 className='text-white'>پشتیبانی سایت</h1>
            <p className='text-sm text-zinc-300'>پاسخگوی سوالات شما هستیم</p>
          </div>
      </div>
    </div>
  )
}

export default ProfileSection