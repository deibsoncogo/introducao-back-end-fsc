const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    if (!email || !password) return onError({ message: "E-mail ou senha inválido" })

    console.log("Usuário verificado no banco de dados")

    onSuccess({ id: "1au" })
  }, 2000)
}

const getUserVideos = (id, onSuccess, onError) => {
  setTimeout(() => {
    if (!id) return onError({ message: "Usuário não encontrado" })
    onSuccess([{ id: "1av", title: "video_1" }, { id: "2bv", title: "video_2" }])
  }, 2000)
}

const getUserVideo = (id, onSuccess, onError) => {
  setTimeout(() => {
    if (!id) return onError({ message: "ID inválido" })
    onSuccess({ id, title: "video_2", createdAt: "2024-02-22" })
  }, 2000)
}

const user = loginUser("test@email.com", "password-test",
  (data) => {
    console.log("loginUser =>", data)

    getUserVideos(data.id,
      (data) => {
        console.log("getUserVideos =>", data)

        getUserVideo(data[1].id,
          (data) => {
            console.log("getUserVideo =>", data)
          },

          (error) => { console.error("getUserVideo =>", error) }
        )
      },

      (error) => { console.error("getUserVideos =>", error) }
    )
  },

  (error) => { console.error("loginUser =>", error) },
)
