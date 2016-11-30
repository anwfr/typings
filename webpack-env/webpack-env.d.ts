// provide env.NODE_ENV from webpack
declare type Process = {
    env : {
        NODE_ENV:string
    }
}
declare var process:Process