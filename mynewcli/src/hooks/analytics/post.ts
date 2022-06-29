const hook = async function (options: { id: string }) {
    // code to post options.id to analytics server
    console.log(`Custom hook running: ${options.id}`)
}

export default hook