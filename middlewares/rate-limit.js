import  rateLimit from 'express-rate-limiter';


export const createBasicRateLimiter = (maxRequests, time)=>{
    return rateLimit({
        max:maxRequests,
        windowMs:time,
        message:'Too many request, try again later',
        standardHeaders :true,
        legacyHeaders:false
    })
}