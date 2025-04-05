import { cx } from '@/src/utils'
import Link from 'next/link'
import React from 'react'

export const Tag = ({link="#",name, ...props}) => {
  return (
    <Link href={link} className={cx("inline-block", props.className)}>
        {name}
    </Link>
  )
}
