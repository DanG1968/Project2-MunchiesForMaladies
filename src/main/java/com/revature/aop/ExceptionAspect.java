package com.revature.aop;

import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;

public class ExceptionAspect {

	private static Logger logger = Logger.getLogger(ExceptionAspect.class);
	
	@AfterThrowing(pointcut= "execution(* *(..))", throwing = "e")
	public void exceptionHandling(JoinPoint jp, Exception e) {
		logger.error("Exception thrown in: " + jp.getStaticPart().getSignature().toString() 
				+ " with parameter: " + jp.getArgs()[0].toString(), e);
	}
}
