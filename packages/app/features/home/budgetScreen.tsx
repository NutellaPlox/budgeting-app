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
import * as CryptoUtil from '@my/utils/common/CryptoUtil'
import { trpc } from 'app/trpc'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { NavBar } from '@my/ui/src/NavBar'

export function BudgetScreen() {
  return (
    <Theme name="dark">
      <XStack w="100%" display="flex">
        <NavBar />
        <XStack flex={1}>
          <YStack w="65%" borderRightWidth="6px" borderRightColor="#636363" p="36px" gap={36}>
            <Text fontSize="48px" color="#fff">
              Budget
            </Text>

            {/* Spent and Ready to Assign */}
            <XStack display="flex" w="100%" flexWrap="nowrap">
              <YStack w="50%" pr="18px">
                <YStack bg="#242424" borderRadius="24px" width="100%" p="24px">
                  <Text fontSize="24px">Spent</Text>
                  <YStack height="168px"></YStack>
                </YStack>
              </YStack>
              <YStack w="50%" pl="18px">
                <YStack bg="#242424" borderRadius="24px" width="100%" p="24px">
                  <Text fontSize="24px">Ready to Assign</Text>
                  <YStack height="168px"></YStack>
                </YStack>
              </YStack>
            </XStack>
            {/* Transactions */}
            <XStack
              w="100%"
              display="flex"
              flexDirection="column"
              bg="#242424"
              borderRadius="24px"
              p="24px"
            >
              <Text fontSize="24px" mb="4px">
                Transactions
              </Text>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Transaction Date, Name, Category, Amount....</Text>
                <XStack py="4px" px="12px" bg="#636363" borderRadius="16px">
                  <Text>Allocate</Text>
                </XStack>
              </YStack>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Transaction Date, Name, Category, Amount....</Text>
                <XStack py="4px" px="12px" bg="#636363" borderRadius="16px">
                  <Text>Allocate</Text>
                </XStack>
              </YStack>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Transaction Date, Name, Category, Amount....</Text>
                <XStack py="4px" px="12px" bg="#636363" borderRadius="16px">
                  <Text>Allocate</Text>
                </XStack>
              </YStack>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Transaction Date, Name, Category, Amount....</Text>
                <XStack py="4px" px="12px" bg="#636363" borderRadius="16px">
                  <Text>Allocate</Text>
                </XStack>
              </YStack>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Transaction Date, Name, Category, Amount....</Text>
                <XStack py="4px" px="12px" bg="#636363" borderRadius="16px">
                  <Text>Allocate</Text>
                </XStack>
              </YStack>
            </XStack>
            {/* Categories */}
            <XStack
              w="100%"
              display="flex"
              flexDirection="column"
              bg="#242424"
              borderRadius="24px"
              p="24px"
            >
              <XStack display="flex" justifyContent="space-between" mb="4px" alignItems="center">
                <Text fontSize="24px">Categories</Text>
                <Text fontSize="15px">Add Category</Text>
              </XStack>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Category</Text>
                <XStack display="flex">
                  <Text>Spent</Text>
                  <XStack
                    width="335px"
                    height="20px"
                    bg="#636363"
                    mx="12px"
                    borderRadius="16px"
                  ></XStack>
                  <Text>Allocated</Text>
                </XStack>
              </YStack>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Category</Text>
                <XStack display="flex">
                  <Text>Spent</Text>
                  <XStack
                    width="335px"
                    height="20px"
                    bg="#636363"
                    mx="12px"
                    borderRadius="16px"
                  ></XStack>
                  <Text>Allocated</Text>
                </XStack>
              </YStack>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Category</Text>
                <XStack display="flex">
                  <Text>Spent</Text>
                  <XStack
                    width="335px"
                    height="20px"
                    bg="#636363"
                    mx="12px"
                    borderRadius="16px"
                  ></XStack>
                  <Text>Allocated</Text>
                </XStack>
              </YStack>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Category</Text>
                <XStack display="flex">
                  <Text>Spent</Text>
                  <XStack
                    width="335px"
                    height="20px"
                    bg="#636363"
                    mx="12px"
                    borderRadius="16px"
                  ></XStack>
                  <Text>Allocated</Text>
                </XStack>
              </YStack>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Category</Text>
                <XStack display="flex">
                  <Text>Spent</Text>
                  <XStack
                    width="335px"
                    height="20px"
                    bg="#636363"
                    mx="12px"
                    borderRadius="16px"
                  ></XStack>
                  <Text>Allocated</Text>
                </XStack>
              </YStack>
              <YStack display="flex" flexDirection="row" justifyContent="space-between" mt="12px">
                <Text fontSize="15px">Category</Text>
                <XStack display="flex">
                  <Text>Spent</Text>
                  <XStack
                    width="335px"
                    height="20px"
                    bg="#636363"
                    mx="12px"
                    borderRadius="16px"
                  ></XStack>
                  <Text>Allocated</Text>
                </XStack>
              </YStack>
            </XStack>
          </YStack>
          <YStack w="35%"></YStack>
        </XStack>
      </XStack>
    </Theme>
  )
}
