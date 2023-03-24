import UserManagement from "@/components/pages/userManagement/UserManagement"
import HeaderLayout from "@/components/parts/layout/HeaderLayout"
import React from "react"

const userManagement = () => {
  return (
    <HeaderLayout>
      <UserManagement />
    </HeaderLayout>
  )
}

export default userManagement
