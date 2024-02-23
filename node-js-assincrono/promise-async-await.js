const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) reject({ message: "E-mail ou senha inválido" })

      console.log("Usuário verificado no banco de dados")

      resolve({ id: "1au" })
    }, 2000)
  })
}

const getUserVideos = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) return reject({ message: "Usuário não encontrado" })
      resolve([{ id: "1av", title: "video_1" }, { id: "2bv", title: "video_2" }])
    }, 2000)
  })
}

const getUserVideo = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) return reject({ message: "ID inválido" })
      resolve({ id, title: "video_2", createdAt: "2024-02-22" })
    }, 2000)
  })
}

const getUserData = async () => {
  try {
    const user = await loginUser("test@email.com", "password-test")
    console.log("user =>", user)

    const videos = await getUserVideos(user.id)
    console.log("videos =>", videos)

    const video = await getUserVideo(videos[1].id)
    console.log("video =>", video)
  } catch (error) {
    console.error("error =>", error)
  }
}

getUserData()
