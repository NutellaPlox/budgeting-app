import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  Text,
  Theme,
  XStack,
  YStack,
  useToastController,
  useTheme,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { trpc } from 'app/utils/trpc'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const theme = useTheme()
  const { data } = trpc.user.test.useQuery()

  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <Theme name="dark">
      <XStack backgroundColor={theme.background} w="100%" minHeight="100vh">
        <XStack>Hello there</XStack>
        <XStack></XStack>
        <XStack></XStack>
      </XStack>
    </Theme>
  )
}
