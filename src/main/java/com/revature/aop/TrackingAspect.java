package com.revature.aop;

import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class TrackingAspect {

	private static Logger logger = Logger.getLogger(TrackingAspect.class);
		
	@Before("execution(* com.revature.*.*(..))")
	public void enteringFind(JoinPoint jp) {
		logger.trace("Entering: " + jp.getStaticPart().getSignature().toString() + " with parameter: " + jp.getArgs());
	}
	
//	@Before("execution(* save*(..))")
//	public void enteringSave(JoinPoint jp) {
//		logger.trace("Entering: " + jp.getStaticPart().getSignature().toString() + " with parameter: " + jp.getArgs());
//	}
//	
//	@Before("execution(* register*(..))")
//	public void enteringRegister(JoinPoint jp) {
//		logger.trace("Entering: " + jp.getStaticPart().getSignature().toString() + " with parameter: " + jp.getArgs());
//	}
//	
//	@Before("execution(* get*(..))")
//	public void enteringGet(JoinPoint jp) {
//		logger.trace("Entering: " + jp.getStaticPart().getSignature().toString() + " with parameter: " + jp.getArgs());
//	}
//	
//	@Before("execution(* set*(..))")
//	public void enteringSet(JoinPoint jp) {
//		logger.trace("Entering: " + jp.getStaticPart().getSignature().toString() + " with parameter: " + jp.getArgs());
//	}
	
	@After("execution(* com.revature.*.*(..))")
	public void exitingFind(JoinPoint jp) {
		logger.trace("Entering: " + jp.getStaticPart().getSignature().toString() + " with parameter: " + jp.getArgs());
	}
//	
//	@After("execution(* save*(..))")
//	public void exitingSave(JoinPoint jp) {
//		logger.trace("Entering: " + jp.getStaticPart().getSignature().toString() + " with parameter: " + jp.getArgs());
//	}
//	
//	@After("execution(* register*(..))")
//	public void exitingRegister(JoinPoint jp) {
//		logger.trace("Entering: " + jp.getStaticPart().getSignature().toString() + " with parameter: " + jp.getArgs());
//	}
//
//	@After("execution(* get*(..))")
//	public void exitingGet(JoinPoint jp) {
//		logger.trace("Entering: " + jp.getStaticPart().getSignature().toString() + " with parameter: " + jp.getArgs());
//	}
//
//	@After("execution(* set*(..))")
//	public void exitingSet(JoinPoint jp) {
//		logger.trace("Entering: " + jp.getStaticPart().getSignature().toString() + " with parameter: " + jp.getArgs());
//	}
}
